const hre = require("hardhat");

async function main() {
  const ride = await hre.ethers.getContractFactory("ride");
  const contract = await ride.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});