/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UsdcToUsdAssimilator } from "../UsdcToUsdAssimilator";

export class UsdcToUsdAssimilator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UsdcToUsdAssimilator> {
    return super.deploy(overrides || {}) as Promise<UsdcToUsdAssimilator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UsdcToUsdAssimilator {
    return super.attach(address) as UsdcToUsdAssimilator;
  }
  connect(signer: Signer): UsdcToUsdAssimilator__factory {
    return super.connect(signer) as UsdcToUsdAssimilator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdcToUsdAssimilator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UsdcToUsdAssimilator;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "intakeNumeraire",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quoteWeight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "intakeNumeraireLPRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "intakeRaw",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "intakeRawAndGetBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "outputNumeraire",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "outputRaw",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "outputRawAndGetBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "viewNumeraireAmount",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "viewNumeraireAmountAndBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "viewNumeraireBalance",
    outputs: [
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "viewNumeraireBalanceLPRatio",
    outputs: [
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "viewRawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quoteWeight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "viewRawAmountLPRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061168c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636fc390521161008c578063df4efe4911610066578063df4efe4914610433578063f09a3fc3146104ac578063f5e6c0ca14610511578063fa00102a14610556576100cf565b80636fc39052146103245780637f328ecc14610389578063ac969a73146103d8576100cf565b8063011847a0146100d45780630271c3c81461014d57806305cf7bb4146101925780631e9b2cba14610201578063523bf257146102705780636b677a8f146102df575b600080fd5b610137600480360360808110156100ea57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b906020019092919050505061059b565b6040518082815260200191505060405180910390f35b61017c6004803603602081101561016357600080fd5b810190808035600f0b90602001909291905050506105c0565b6040518082815260200191505060405180910390f35b6101e8600480360360608110156101a857600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610738565b6040518082600f0b815260200191505060405180910390f35b61024d6004803603604081101561021757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061074c565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b6102bc6004803603604081101561028657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610841565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b61030e600480360360208110156102f557600080fd5b810190808035600f0b9060200190929190505050610a6e565b6040518082815260200191505060405180910390f35b6103736004803603604081101561033a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610a90565b6040518082815260200191505060405180910390f35b6103b56004803603602081101561039f57600080fd5b8101908080359060200190929190505050610beb565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b61041a600480360360208110156103ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e34565b6040518082600f0b815260200191505060405180910390f35b6104966004803603608081101561044957600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610f0d565b6040518082815260200191505060405180910390f35b6104f8600480360360408110156104c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611088565b6040518082600f0b815260200191505060405180910390f35b61053d6004803603602081101561052757600080fd5b81019080803590602001909291905050506111df565b6040518082600f0b815260200191505060405180910390f35b6105826004803603602081101561056c57600080fd5b81019080803590602001909291905050506111fe565b6040518082600f0b815260200191505060405180910390f35b60006105b6620f424083600f0b61137290919063ffffffff16565b9050949350505050565b60006105db620f424083600f0b61137290919063ffffffff16565b9050600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561068257600080fd5b505af1158015610696573d6000803e3d6000fd5b505050506040513d60208110156106ac57600080fd5b8101908080519060200190929190505050905080610732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b50919050565b600061074382610e34565b90509392505050565b600080610765620f42408461142d90919063ffffffff16565b9150600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156107e457600080fd5b505afa1580156107f8573d6000803e3d6000fd5b505050506040513d602081101561080e57600080fd5b81019080805190602001909291905050509050610837620f42408261142d90919063ffffffff16565b9150509250929050565b600080600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156108cb57600080fd5b505af11580156108df573d6000803e3d6000fd5b505050506040513d60208110156108f557600080fd5b810190808051906020019092919050505090508061097b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156109f857600080fd5b505afa158015610a0c573d6000803e3d6000fd5b505050506040513d6020811015610a2257600080fd5b81019080805190602001909291905050509050610a4b620f42408661142d90919063ffffffff16565b9350610a63620f42408261142d90919063ffffffff16565b925050509250929050565b6000610a89620f424083600f0b61137290919063ffffffff16565b9050919050565b6000610aab620f424083600f0b61137290919063ffffffff16565b9050600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610b3457600080fd5b505af1158015610b48573d6000803e3d6000fd5b505050506040513d6020811015610b5e57600080fd5b8101908080519060200190929190505050905080610be4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b5092915050565b600080600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610c9357600080fd5b505af1158015610ca7573d6000803e3d6000fd5b505050506040513d6020811015610cbd57600080fd5b8101908080519060200190929190505050905080610d43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610dc057600080fd5b505afa158015610dd4573d6000803e3d6000fd5b505050506040513d6020811015610dea57600080fd5b81019080805190602001909291905050509050610e13620f42408661142d90919063ffffffff16565b9350610e2b620f42408261142d90919063ffffffff16565b92505050915091565b60008073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610eb257600080fd5b505afa158015610ec6573d6000803e3d6000fd5b505050506040513d6020811015610edc57600080fd5b81019080805190602001909291905050509050610f05620f42408261142d90919063ffffffff16565b915050919050565b6000610f28620f424083600f0b61137290919063ffffffff16565b9050600073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610fcf57600080fd5b505af1158015610fe3573d6000803e3d6000fd5b505050506040513d6020811015610ff957600080fd5b810190808051906020019092919050505090508061107f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b50949350505050565b60008073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561111057600080fd5b505af1158015611124573d6000803e3d6000fd5b505050506040513d602081101561113a57600080fd5b81019080805190602001909291905050509050806111c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b6111d6620f42408461142d90919063ffffffff16565b91505092915050565b60006111f7620f42408361142d90919063ffffffff16565b9050919050565b60008073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156112a457600080fd5b505af11580156112b8573d6000803e3d6000fd5b505050506040513d60208110156112ce57600080fd5b8101908080519060200190929190505050905080611354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b61136a620f42408461142d90919063ffffffff16565b915050919050565b6000808214156113855760009050611427565b600083600f0b121561139657600080fd5b600060406fffffffffffffffffffffffffffffffff841685600f0b02901c90506000608084901c85600f0b02905077ffffffffffffffffffffffffffffffffffffffffffffffff8111156113e957600080fd5b604081901b9050817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0381111561141f57600080fd5b818101925050505b92915050565b60008082141561143c57600080fd5b60006114488484611495565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff16111561148b57600080fd5b8091505092915050565b6000808214156114a457600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff84116114da5782604085901b816114d257fe5b04905061162f565b600060c09050600060c086901c9050640100000000811061150357602081901c90506020820191505b62010000811061151b57601081901c90506010820191505b610100811061153257600881901c90506008820191505b6010811061154857600481901c90506004820191505b6004811061155e57600281901c90506002820191505b6002811061156d576001820191505b600160bf830360018703901c018260ff0387901b8161158857fe5b0492506fffffffffffffffffffffffffffffffff8311156115a857600080fd5b6000608086901c8402905060006fffffffffffffffffffffffffffffffff871685029050600060c089901c9050600060408a901b9050828110156115ed576001820391505b8281039050608084901b925082811015611608576001820391505b8281039050608084901c821461161a57fe5b88818161162357fe5b04870196505050505050505b6fffffffffffffffffffffffffffffffff81111561164c57600080fd5b809150509291505056fea2646970667358221220bd4d080d732050af9958aeb135b991a94c7850760dacfbbc0f6063a34584b79664736f6c63430007030033";
