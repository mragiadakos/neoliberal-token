const hre = require("hardhat");

async function main() {
  const Neoliberal = await hre.ethers.getContractFactory("NeoliberalToken");
  const nl = await Neoliberal.deploy("Neoliberal", "NL",1000000000);

  await nl.deployed();

  return nl.address.signer.addresshash
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
