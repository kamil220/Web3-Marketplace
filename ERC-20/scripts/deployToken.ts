import { Contract } from "ethers";
import {artifacts, ethers} from "hardhat";

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("LeoToken");
    const token = await Token.deploy();

    await token.deployed();

    console.log("Token deployed to address:", token.address);

    saveFrontendFiles(token);
}

function saveFrontendFiles(token: Contract) {
    const fs = require("fs");
    const path = require("path");
    const contractsDir = path.join(__dirname, "/../frontend/src/contracts");

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-addresses.json",
        JSON.stringify({ Token: token.address }, undefined, 2)
    );

    const TokenArtifact = artifacts.readArtifactSync("Token");
    fs.writeFileSync(
        contractsDir + "/Token.json",
        JSON.stringify(TokenArtifact, null, 2)
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});