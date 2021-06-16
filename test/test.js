const { expect } = require("chai");

describe("Neoliberal", function() {
  it("Should work", async function() {
    const Token = await ethers.getContractFactory("NeoliberalToken");
    const token = await Token.deploy("Neoliberal", "NL",1000000000);
    
    await token.deployed();
   

    const [owner, addr1, policeAddr] = await ethers.getSigners();
    await token.connect(owner).setTax(180)
    let balance = await token.balanceOf(addr1.address);
    console.log("adrr1 " + balance.toString())
    
    balance = await token.balanceOf(owner.address);
    console.log("owner " + balance.toString())

    balance = await token.balanceOf(token.address);
    console.log("tax " + balance.toString())

    await token.connect(owner).transfer(addr1.address, 10080)
    balance = await token.balanceOf(addr1.address);
    console.log("adrr1 " + balance.toString())
    
    balance = await token.balanceOf(owner.address);
    console.log("owner " + balance.toString())

    balance = await token.balanceOf(token.address);
    console.log("tax " + balance.toString())

    balance = await token.getTaxRevenue()
    console.log("revenue " + balance.toString())


    await token.connect(owner).addExpense({title:"police",account:policeAddr.address,limit:200})

    let expenses = await token.expenses("police")
    console.log(expenses)

    await token.connect(owner).transferToExpense("police", 180);
    balance = await token.getTaxRevenue()
    console.log("revenue " + balance.toString())
    balance = await token.balanceOf(policeAddr.address);
    console.log("police " + balance.toString())


    await token.connect(owner).removeExpense('police')

    expenses = await token.expenses("police")
    console.log(expenses)
  });
});
