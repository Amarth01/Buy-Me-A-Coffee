require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const GOERlI_URL = process.env.GOERlI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: GOERlI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
