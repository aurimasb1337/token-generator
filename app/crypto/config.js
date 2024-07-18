export const config = {
  tokenGeneratorAddress: "0xBcE75497D72b25c3509B62ae1a47CCfb502AD08d",
  ABI: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "_newFactory", type: "address" },
      ],
      name: "addFactory",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "creationFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "factoryIndex", type: "uint256" },
            { internalType: "bool", name: "mintable", type: "bool" },
            { internalType: "bool", name: "burnable", type: "bool" },
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "ticker", type: "string" },
            { internalType: "uint256", name: "initialSupply", type: "uint256" },
            { internalType: "uint256", name: "maxSupply", type: "uint256" },
            { internalType: "bool", name: "taxToken", type: "bool" },
            { internalType: "uint256", name: "sellTax", type: "uint256" },
            { internalType: "uint256", name: "buyTax", type: "uint256" },
            {
              internalType: "uint256",
              name: "liquidityShare",
              type: "uint256",
            },
            { internalType: "uint256", name: "teamShare", type: "uint256" },
          ],
          internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
          name: "params",
          type: "tuple",
        },
        { internalType: "bytes", name: "additionalData", type: "bytes" },
      ],
      name: "deployToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "factories",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
      name: "removeFactory",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
      name: "setFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  factories: [
    {
      address: "0x3b01457255bD6ec460D9Ab8f31CFabd8a710D176",
      ABI: [
        {
          inputs: [
            { internalType: "address", name: "_generator", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "creator", type: "address" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "factoryIndex",
                  type: "uint256",
                },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "burnable", type: "bool" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "ticker", type: "string" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                { internalType: "bool", name: "taxToken", type: "bool" },
                { internalType: "uint256", name: "sellTax", type: "uint256" },
                { internalType: "uint256", name: "buyTax", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "liquidityShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "teamShare", type: "uint256" },
              ],
              internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
              name: "params",
              type: "tuple",
            },
            { internalType: "bytes", name: "additionalData", type: "bytes" },
          ],
          name: "deploy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    // simple
    {
      address: "0x6a9668c2C6E1FB107021375BaCD9d92e79cc8369",
      ABI: [
        {
          inputs: [
            { internalType: "address", name: "_generator", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "creator", type: "address" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "factoryIndex",
                  type: "uint256",
                },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "burnable", type: "bool" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "ticker", type: "string" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                { internalType: "bool", name: "taxToken", type: "bool" },
                { internalType: "uint256", name: "sellTax", type: "uint256" },
                { internalType: "uint256", name: "buyTax", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "liquidityShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "teamShare", type: "uint256" },
              ],
              internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
              name: "params",
              type: "tuple",
            },
            { internalType: "bytes", name: "additionalData", type: "bytes" },
          ],
          name: "deploy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    {
      address: "0xF5A7A624f4c11F581eb5a2B12e9bcA327F692c79",
      ABI: [
        {
          inputs: [
            { internalType: "address", name: "_generator", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "creator", type: "address" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "factoryIndex",
                  type: "uint256",
                },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "burnable", type: "bool" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "ticker", type: "string" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                { internalType: "bool", name: "taxToken", type: "bool" },
                { internalType: "uint256", name: "sellTax", type: "uint256" },
                { internalType: "uint256", name: "buyTax", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "liquidityShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "teamShare", type: "uint256" },
              ],
              internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
              name: "params",
              type: "tuple",
            },
            { internalType: "bytes", name: "additionalData", type: "bytes" },
          ],
          name: "deploy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    }, // burnable
    {
      address: "0x872521B46095139e70A38AE3e8d95611649AAF51",
      ABI: [
        {
          inputs: [
            { internalType: "address", name: "_generator", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "creator", type: "address" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "factoryIndex",
                  type: "uint256",
                },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "burnable", type: "bool" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "ticker", type: "string" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                { internalType: "bool", name: "taxToken", type: "bool" },
                { internalType: "uint256", name: "sellTax", type: "uint256" },
                { internalType: "uint256", name: "buyTax", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "liquidityShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "teamShare", type: "uint256" },
              ],
              internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
              name: "params",
              type: "tuple",
            },
            { internalType: "bytes", name: "additionalData", type: "bytes" },
          ],
          name: "deploy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    }, // mintburn
    {
      address: "0xCbaC7772BDb35Ab605A030612849AeDBA2068436",
      ABI: [
        {
          inputs: [
            { internalType: "address", name: "_generator", type: "address" },
            {
              internalType: "contract IUniswapV2Router02",
              name: "_router",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "creator", type: "address" },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "factoryIndex",
                  type: "uint256",
                },
                { internalType: "bool", name: "mintable", type: "bool" },
                { internalType: "bool", name: "burnable", type: "bool" },
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "ticker", type: "string" },
                {
                  internalType: "uint256",
                  name: "initialSupply",
                  type: "uint256",
                },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                { internalType: "bool", name: "taxToken", type: "bool" },
                { internalType: "uint256", name: "sellTax", type: "uint256" },
                { internalType: "uint256", name: "buyTax", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "liquidityShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "teamShare", type: "uint256" },
              ],
              internalType: "struct IAlienbaseTokenFactory.DeploymentParams",
              name: "params",
              type: "tuple",
            },
            { internalType: "bytes", name: "additionalData", type: "bytes" },
          ],
          name: "deploy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    }, // tax
  ],
};
