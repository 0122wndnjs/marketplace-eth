
const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys = require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: 3,
      gas: 5500000,  // Gas Limit, How much gas we are willing to spend
      gasPrice: 20000000000,  // how much we are willing to sepnd for unit of gas
      confirmations: 2,  // number of blocks to wait between deployment
      timeoutBlocks: 200  // number of blocks before deployment times out
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};

// 5500000 * 20000000000 = 110000000000000000 = 0.11 ETH

