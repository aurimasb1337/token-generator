import { ethers } from "ethers";
import { toast } from "react-toastify";
import { config } from "./config";

// Private key for your Ethereum wallet
const privateKey = process.env.NEXT_PUBLIC_ETH_PRIVATE_KEY;

const infuraApiKey = "9123e5d017064a098cd6d3280c8bc8ec";

const provider = new ethers.providers.InfuraProvider("mainnet", infuraApiKey);
const wallet = new ethers.Wallet(privateKey, provider);

export const deployToken = async (deploymentParams) => {
  console.log(config.tokenGeneratorAddress, config.ABI);
  const tokenGeneratorContract = new ethers.Contract(
    config.tokenGeneratorAddress,
    config.ABI,
    wallet
  );

  try {
    const creationFee = ethers.utils.parseEther("0.15");

    console.log(deploymentParams);
    const tx = await tokenGeneratorContract.deployToken(
      deploymentParams,
      "0x", // Mocked additional data
      {
        value: creationFee,
      }
    );

    // Wait for the transaction to be mined
    await tx.wait();

    console.log("Token deployed successfully");

    toast.success("Token deployed successfully");
  } catch (error) {
    console.error("Failed to deploy token", error);

    toast.error("Failed to deploy token");
  }
};
