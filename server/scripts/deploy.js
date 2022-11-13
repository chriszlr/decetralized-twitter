const hre = require("hardhat");

async function main() {

  const TwitterContract = await hre.ethers.getContractFactory("TwitterContract");
  const twitterContract = await TwitterContract.deploy();

  await twitterContract.deployed();

  console.log("Twitter Contract deployed to: ", twitterContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
