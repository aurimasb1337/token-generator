"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import ToggleSwitch from "./ToggleSwitch";
import ButtonInput from "./ButtonInput";
import ImageUploader from "./ImageUploader";
import { toast } from "react-toastify";
import { deployToken } from "../crypto/blockchain";
import { ethers } from "ethers";

const TokenForm = () => {
  const formik = useFormik({
    initialValues: {
      ticker: "MYTKNZ",
      initialSupply: 500000,
      name: "Test Token",
      maxSupply: 5000000,
      mintingSupport: false,
      burningSupport: true,
      receiveFees: false,
      feesToLiquidity: "",
      feesToTeam: "",
    },
    validationSchema: Yup.object()
      .shape({
        receiveFees: Yup.boolean(),
        mintingSupport: Yup.boolean(),
        burningSupport: Yup.boolean(),
        ticker: Yup.string()
          .max(8, "Max 8 symbols")
          .required("Ticker is required"),
        initialSupply: Yup.number()
          .min(0.0001, "Initial supply must be at least 0.0001")
          .max(10e18, "Initial supply must be less than or equal to 10e18")
          .required("Initial supply is required"),
        maxSupply: Yup.number()
          .min(0.0001, "Maximum supply must be at least 0.0001")
          .max(10e18, "Maximum supply must be less than or equal to 10e18")
          .required("Maximum supply is required"),
        name: Yup.string().required("Name is required"),
        feesToLiquidity: Yup.number().when("receiveFees", {
          is: true,
          then: Yup.number()
            .min(0)
            .max(100)
            .required("Fees to liquidity is required"),
        }),
        feesToTeam: Yup.number().when("receiveFees", {
          is: true,
          then: Yup.number()
            .min(0)
            .max(100)
            .required("Fees to team is required"),
        }),
      })
      .test("fees-sum", "Total fees must equal 100%", function (values) {
        const { receiveFees, feesToLiquidity, feesToTeam } = values;
        if (receiveFees) {
          return feesToLiquidity + feesToTeam === 100; // Exactly 100
        }
        return true;
      })
      .test(
        "taxable-minting-burning",
        "Taxable token cannot also be mintable and/or burnable",
        function (values) {
          const { receiveFees, mintingSupport, burningSupport } = values;
          if (receiveFees && (mintingSupport || burningSupport)) {
            return false;
          }
          return true;
        }
      )
      .test(
        "minting-burning",
        "Token can be only mintable, only burnable or both",
        function (values) {
          const { mintingSupport, burningSupport } = values;
          if (mintingSupport || burningSupport) {
            return true;
          }
          return false;
        }
      ),

    onSubmit: async (values) => {
      const {
        receiveFees,
        feesToLiquidity,
        feesToTeam,
        mintingSupport,
        burningSupport,
        ticker,
        name,
        initialSupply,
        maxSupply,
      } = values;

      // Check fees-sum
      if (receiveFees && feesToLiquidity + feesToTeam !== 100) {
        console.error("Total fees must equal 100%");
        toast.error("Total fees must equal 100%");
        return;
      }

      // Check taxable-minting-burning
      if (receiveFees && (mintingSupport || burningSupport)) {
        console.error("Taxable token cannot also be mintable and/or burnable");
        toast.error("Taxable token cannot also be mintable and/or burnable");
        return;
      }

      // Check minting-burning
      if (!mintingSupport && !burningSupport) {
        console.error("Token can be only mintable, only burnable or both");
        toast.error("Token can be only mintable, only burnable or both");
        return;
      }

      const factoryIndex =
        mintingSupport && burningSupport
          ? 3
          : mintingSupport
          ? 1
          : burningSupport
          ? 2
          : receiveFees
          ? 4
          : 0;

      const deploymentParams = {
        factoryIndex,
        mintable: mintingSupport,
        burnable: burningSupport,
        name,
        ticker,
        initialSupply: ethers.utils.parseUnits(initialSupply.toString(), 18),
        maxSupply: ethers.utils.parseUnits(maxSupply.toString(), 18),
        taxToken: receiveFees,
        sellTax: ethers.utils.parseUnits((0).toString(), 18),
        buyTax: ethers.utils.parseUnits((0).toString(), 18),
        liquidityShare: ethers.utils.parseUnits(
          (receiveFees ? feesToLiquidity : 0).toString(),
          18
        ),
        teamShare: ethers.utils.parseUnits(
          (receiveFees ? feesToTeam : 0).toString(),
          18
        ),
      };

      await deployToken(deploymentParams);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="text-white  rounded-lg w-full gap-6 flex-col flex"
      >
        <span className="text-gray-300">
          Enter basic details about your token
        </span>
        <div className="flex justify-between">
          <div className="flex-1">
            <InputField
              placeholder="MYTKN"
              id="ticker"
              label={"Ticker"}
              caption={"Max 8 symbols"}
              value={formik.values.ticker}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.ticker && formik.errors.ticker
                  ? formik.errors.ticker
                  : ""
              }
            />
          </div>
          <ImageUploader />
        </div>
        <InputField
          placeholder="My awesome token"
          id="name"
          label={"Name"}
          caption={"Max 30 symbols"}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
        />
        <div className="flex flex-col p-4 border border-gray-900 gap-5 rounded-lg">
          <div className="flex items-center justify-between ">
            <label htmlFor="mintingSupport" className="text-text-primary">
              Minting support
            </label>
            <ToggleSwitch
              id="mintingSupport"
              checked={formik.values.mintingSupport}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex items-center justify-between ">
            <label htmlFor="burningSupport" className="text-text-primary">
              Burning support
            </label>
            <ToggleSwitch
              id="burningSupport"
              checked={formik.values.burningSupport}
              onChange={formik.handleChange}
              label="Burning support"
            />
          </div>
        </div>
        <InputField
          placeholder="1 000 000"
          id="initialSupply"
          label={"Initial token supply"}
          caption={""}
          value={formik.values.initialSupply}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.initialSupply && formik.errors.initialSupply
              ? formik.errors.initialSupply
              : ""
          }
        />

        <InputField
          placeholder="1 000 000"
          id="maxSupply"
          label={"Maximum token supply"}
          caption={""}
          value={formik.values.maxSupply}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.maxSupply && formik.errors.maxSupply
              ? formik.errors.maxSupply
              : ""
          }
        />

        <div className="flex flex-col py-4 px-6 border border-gray-900 gap-5 rounded-lg">
          <div className="flex items-center justify-between ">
            <label htmlFor="receiveFees" className="text-text-primary">
              Receive fees
            </label>
            <ToggleSwitch
              id="receiveFees"
              checked={formik.values.receiveFees}
              onChange={formik.handleChange}
            />
          </div>
          <span className="text-gray-400">
            Here text explaining what they are, what are benefits and drawbacks
          </span>
          <div className="border-gray-900 h-1 border-t">&nbsp;</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="uppercase text-xs" htmlFor={"feesToLiquidity"}>
                Fees to liquidity
              </label>
              <div className="bg-secondary text-text-secondary rounded-full h-6 w-6 text-center ">
                i
              </div>
            </div>
            <ButtonInput
              id={"feesToLiquidity"}
              value={formik.values.feesToLiquidity}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="uppercase text-sm" htmlFor={"feesToTeam"}>
                Fees to team
              </label>
              <div className="bg-secondary text-text-secondary rounded-full h-6 w-6 text-center ">
                i
              </div>
            </div>
            <ButtonInput
              id={"feesToTeam"}
              value={formik.values.feesToTeam}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="items-center flex flex-col gap-3">
          <div>
            <button
              disabled={!formik.touched}
              type="submit"
              className="w-auto  bg-primary text-text-dark py-3 px-6 rounded-lg"
            >
              DEPLOY
            </button>
          </div>
          <div className="text-text-secondary text-sm text-center">
            <p>Service fee: 0.25 ETH</p>
            <span>Gas fee will be added to final amount</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TokenForm;
