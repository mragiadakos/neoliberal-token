const { expect } = require("chai");

describe("Neoliberal", function() {
  it("Should work", async function() {
    const Token = await ethers.getContractFactory("NeoliberalToken");
    const token = await Token.deploy(1000000000000000);
    
    await token.deployed();
   

    const [owner, addr1, addr2] = await ethers.getSigners();
    let balance = await token.balanceOf(addr1.address);
    console.log(balance.toString())
    balance = await token.balanceOf(owner.address);
    console.log(balance.toString())

    let acc = await token.acc()
    console.log(acc.toString())

    await token.connect(owner).transfer(addr1.address, 80)
    acc = await token.acc()
    console.log(acc.toString())
  });
});
