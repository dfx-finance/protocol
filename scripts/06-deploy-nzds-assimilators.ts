import hre from "hardhat";
import chalk from "chalk";
import path from "path";
import fs from "fs";

import { getAccounts, deployContract } from "./common";

const { ethers } = hre;

async function main() {
  const { user } = await getAccounts();

  console.log(chalk.blue(`>>>>>>>>>>>> Network: ${(hre.network.config as any).url} <<<<<<<<<<<<`));
  console.log(chalk.blue(`>>>>>>>>>>>> Deployer: ${user.address} <<<<<<<<<<<<`));

  const NzdsToUsdAssimilatorFactory = await ethers.getContractFactory("NzdsToUsdAssimilator");

  const nzdsToUsdAssimilator = await deployContract({
    name: "NzdsToUsdAssimilator",
    deployer: user,
    factory: NzdsToUsdAssimilatorFactory,
    args: [],
    opts: {
      gasLimit: 2000000,
    },
  });

  const output = {
    nzdsToUsdAssimilator: nzdsToUsdAssimilator.address,
  };

  const outputPath = path.join(__dirname, new Date().getTime().toString() + `_assimilators_deployed.json`);
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 4));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
