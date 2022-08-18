import { ethers, network } from "hardhat";
import { writeFileSync, readFileSync } from "fs";
import * as path from "path";

async function main() {
  const chainId = network.config.chainId;
  console.log("chain", chainId);
  const Whitelist = await ethers.getContractFactory("Whitelist");
  const whitelist = await Whitelist.deploy(10);
  await whitelist.deployed();

  console.log("Whitelist deployed to:", whitelist.address);

  const whitelistJson = JSON.parse(
    readFileSync(
      path.resolve(__dirname, "../", "lib", "Whitelist.json"),
      "utf8"
    )
  );

  const whitelistAbi = {
    address: whitelist.address,
    abi: JSON.parse(whitelist.interface.format("json") as string),
  };

  whitelistJson[chainId!.toString()] = whitelistAbi;

  writeFileSync(
    path.resolve(__dirname, "../", "lib", "Whitelist.json"),
    JSON.stringify(whitelistJson, null, 2)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
