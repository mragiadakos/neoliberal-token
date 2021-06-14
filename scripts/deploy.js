const hre = require("hardhat");

async function main() {
  const Neoliberal = await hre.ethers.getContractFactory("NeoliberalToken");
  const nl = await Neoliberal.deploy(1000000000);

  await nl.deployed();

  console.log("Neoliberal deployed to:", nl.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
