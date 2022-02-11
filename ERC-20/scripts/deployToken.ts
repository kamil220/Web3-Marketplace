import { ethers } from "hardhat";

async function main() {
    const Token = await ethers.getContractFactory("LeoToken");
    const token = await Token.deploy();

    await token.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
