// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CryptoSkull = await hre.ethers.getContractFactory("CryptoSkull"); // Get my contract without extension name
  const cryptoSkull = await CryptoSkull.deploy(); // construct parameter

  await cryptoSkull.deployed();

// run `npx hardhat compile` to create to  create artifat directory

// then run `npx hardhat node` to retrieve free 20 accounts from hardhat

// to finish run this script with  `npx hardhat run scripts/deploy.js --network localhost` to retrieve free 20 accounts from hardhat

// retrieve address contract address  : 0x5FbDB2315678afecb367f032d93F642f64180aa3

// #0 account is default contract owner

    console.log("Crypto skull contract deployed to :", cryptoSkull.address); // Get ethereum  contract address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
