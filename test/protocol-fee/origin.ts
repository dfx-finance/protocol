/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from "hardhat";
import { Signer, Contract, ContractFactory, BigNumber, BigNumberish } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import chai from "chai";
import chaiBigNumber from "chai-bignumber";

import {CurveFactory} from '../../typechain/CurveFactory'
import { Curve } from "../../typechain/Curve";
import { ERC20 } from "../../typechain/ERC20";
import { Router } from "../../typechain/Router";

import { ORACLES, TOKENS } from "../Constants";
import { getFutureTime, expectBNAproxEq, getOracleAnswer } from "../Utils";

import { scaffoldTest, scaffoldHelpers } from "../Setup";
import { isBigNumberish } from "@ethersproject/bignumber/lib/bignumber";

chai.use(chaiBigNumber(BigNumber));

const { parseUnits } = ethers.utils;

const NAME = "DFX V1";
const SYMBOL = "DFX-V1";
const ALPHA = parseUnits("0.6");
const BETA = parseUnits("0.35");
const MAX = parseUnits("0.15");
const EPSILON = parseUnits("0.0004");
const LAMBDA = parseUnits("0.3");

describe("CADC-USDC", function(){
    let [user1, user2]: Signer[] = [];
    let [user1Address, user2Address,]: string[] = [];
  
    let usdcToUsdAssimilator: Contract;
    let cadcToUsdAssimilator: Contract;
  
    let CurveFactory: ContractFactory;
    let RouterFactory: ContractFactory;
  
    let curveFactory: CurveFactory;
    let router: Router;
  
    let usdc: ERC20;
    let cadc: ERC20;
    let erc20: ERC20;

    let createCurveAndSetParams: ({
      name,
      symbol,
      base,
      quote,
      baseWeight,
      quoteWeight,
      baseAssimilator,
      quoteAssimilator,
      params,
      factoryAddress,
    }: {
      name: string;
      symbol: string;
      base: string;
      quote: string;
      baseWeight: BigNumberish;
      quoteWeight: BigNumberish;
      baseAssimilator: string;
      quoteAssimilator: string;
      params: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish];
      factoryAddress : String;
    }) => Promise<{
      curve: Curve;
      curveLpToken: ERC20;
    }>;
  
    let multiMintAndApprove: (requests: [string, Signer, BigNumberish, string][]) => Promise<void>;
    
    before(async () => {
        ({
          users: [user1, user2],
          userAddresses: [user1Address, user2Address],
          usdcToUsdAssimilator,
          cadcToUsdAssimilator,
          CurveFactory,
          RouterFactory,
          usdc,
          cadc,
          erc20,
        } = await scaffoldTest());
      });

    beforeEach(async () => {
    console.log(user2Address);
    console.log(`treasury address is ${user2Address}`);
    curveFactory = (await CurveFactory.deploy(50,user2Address)) as CurveFactory;
    router = (await RouterFactory.deploy(curveFactory.address)) as Router;

    ({ createCurveAndSetParams, multiMintAndApprove } = await scaffoldHelpers({
        curveFactory,
        erc20,
    }));
    });

    beforeEach(async() =>{
    const { curve: cadcCurve } = await createCurveAndSetParams({
        name: NAME,
        symbol: SYMBOL,
        base: cadc.address,
        quote: usdc.address,
        baseWeight: parseUnits("0.6"),
        quoteWeight: parseUnits("0.4"),
        baseAssimilator: cadcToUsdAssimilator.address,
        quoteAssimilator: usdcToUsdAssimilator.address,
        params: [ALPHA, BETA, MAX, EPSILON, LAMBDA],
        factoryAddress : curveFactory.address,
        });

        await multiMintAndApprove([
        [TOKENS.USDC.address, user1, parseUnits("300000000", TOKENS.USDC.decimals), cadcCurve.address],
        [TOKENS.CADC.address, user1, parseUnits("300000000", TOKENS.CADC.decimals), cadcCurve.address],
        ]);

        await getPoolStats(cadcCurve);
        // deposit 6M worth of cadc & 4M worth of usdc to the curve
        await cadcCurve.connect(user1).deposit(parseUnits("10000000"), await getFutureTime());
 
        let originalCADCBalance = await getCADCBalance(await user2.getAddress());
        let originalUSDCBalance = await getUSDCBalance(await user2.getAddress());


        // swap 60k cadc into usdc
        await cadcCurve.connect(user1).originSwap(TOKENS.CADC.address,TOKENS.USDC.address,parseUnits("60000", TOKENS.CADC.decimals),0,await getFutureTime());
        let afterSwapCADCBalance = await getCADCBalance(await user1.getAddress());
        let afterSwapUSDCBalance = await getUSDCBalance(await user1.getAddress());

        // swap back usdc to cadc
        await cadcCurve.connect(user1).originSwap(TOKENS.USDC.address, TOKENS.CADC.address,parseUnits(afterSwapUSDCBalance, TOKENS.USDC.decimals),0, await getFutureTime());
        let afterReverseSwapCADCBalance = await getCADCBalance(await user1.getAddress());
        let afterReverseSwapUSDCBalance = await getUSDCBalance(await user1.getAddress());


        console.log(originalCADCBalance,"     ", originalUSDCBalance);
        console.log(afterSwapCADCBalance,"     ", afterSwapUSDCBalance);
        console.log(afterReverseSwapCADCBalance,"     ", afterReverseSwapUSDCBalance);

        console.log("treasury balance for usdc & cadc");
        console.log(await getUSDCBalance(await user2.getAddress()));
        console.log(await getCADCBalance(await user2.getAddress()));

    })

    const getUSDCBalance = async (address : string) => {
        let _user_n_bal = await usdc.balanceOf(address);
        return formatUnits(_user_n_bal, TOKENS.USDC.decimals);
    }

    const getCADCBalance =async (address : string) => {
        let _user_n_bal = await cadc.balanceOf(address);
        return formatUnits(_user_n_bal, TOKENS.CADC.decimals);
    }

    const getPoolStats =async (cadcCurve:Contract) => {
        let stats = await cadcCurve.viewCurve();
        console.log(stats);
    }

    it("cadc-usdc swap",async () => {
        
    })
})