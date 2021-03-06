/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LeoToken, LeoTokenInterface } from "../LeoToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "releasePeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRate",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "vestingDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "withdrawLeoTokens",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600d81526020017f4c656f636f646520546f6b656e0000000000000000000000000000000000000081525060009080519060200190620000519291906200024e565b506040518060400160405280600381526020017f4c454f0000000000000000000000000000000000000000000000000000000000815250600190805190602001906200009f9291906200024e565b506012600260006101000a81548160ff021916908360ff16021790555062093a80600260156101000a81548163ffffffff021916908363ffffffff1602179055506064600260196101000a81548160ff021916908360ff1602179055503480156200010957600080fd5b5033600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200015b6200021960201b60201c565b600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001ae6200021960201b60201c565b60036000600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620005af565b6000600260009054906101000a900460ff16600a62000239919062000359565b620186a062000249919062000496565b905090565b8280546200025c906200050e565b90600052602060002090601f016020900481019282620002805760008555620002cc565b82601f106200029b57805160ff1916838001178555620002cc565b82800160010185558215620002cc579182015b82811115620002cb578251825591602001919060010190620002ae565b5b509050620002db9190620002df565b5090565b5b80821115620002fa576000816000905550600101620002e0565b5090565b6000808291508390505b6001851115620003505780860481111562000328576200032762000544565b5b6001851615620003385780820291505b80810290506200034885620005a2565b945062000308565b94509492505050565b60006200036682620004f7565b9150620003738362000501565b9250620003a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620003aa565b905092915050565b600082620003bc57600190506200048f565b81620003cc57600090506200048f565b8160018114620003e55760028114620003f05762000426565b60019150506200048f565b60ff84111562000405576200040462000544565b5b8360020a9150848211156200041f576200041e62000544565b5b506200048f565b5060208310610133831016604e8410600b8410161715620004605782820a9050838111156200045a576200045962000544565b5b6200048f565b6200046f8484846001620002fe565b9250905081840481111562000489576200048862000544565b5b81810290505b9392505050565b6000620004a382620004f7565b9150620004b083620004f7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620004ec57620004eb62000544565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200052757607f821691505b602082108114156200053e576200053d62000573565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b611f4880620005bf6000396000f3fe6080604052600436106100f35760003560e01c80638c399cbb1161008a578063a9059cbb11610059578063a9059cbb14610356578063d0febe4c14610393578063d46d09251461039d578063dd62ed3e146103c8576100f3565b80638c399cbb146102865780638da5cb5b146102c357806395d89b41146102ee5780639b71569b14610319576100f3565b8063313ce567116100c6578063313ce567146101c857806331711884146101f357806363ef16271461021e57806370a0823114610249576100f3565b806306fdde03146100f8578063095ea7b31461012357806318160ddd1461016057806323b872dd1461018b575b600080fd5b34801561010457600080fd5b5061010d610405565b60405161011a91906118de565b60405180910390f35b34801561012f57600080fd5b5061014a600480360381019061014591906116ed565b610493565b60405161015791906118c3565b60405180910390f35b34801561016c57600080fd5b506101756105f7565b60405161018291906119c0565b60405180910390f35b34801561019757600080fd5b506101b260048036038101906101ad919061169e565b610628565b6040516101bf91906118c3565b60405180910390f35b3480156101d457600080fd5b506101dd610b6c565b6040516101ea91906119f6565b60405180910390f35b3480156101ff57600080fd5b50610208610b7f565b60405161021591906119f6565b60405180910390f35b34801561022a57600080fd5b50610233610b92565b60405161024091906119db565b60405180910390f35b34801561025557600080fd5b50610270600480360381019061026b9190611639565b610ba8565b60405161027d91906119c0565b60405180910390f35b34801561029257600080fd5b506102ad60048036038101906102a89190611639565b610bc0565b6040516102ba91906119c0565b60405180910390f35b3480156102cf57600080fd5b506102d8610bd8565b6040516102e591906118a8565b60405180910390f35b3480156102fa57600080fd5b50610303610bfe565b60405161031091906118de565b60405180910390f35b34801561032557600080fd5b50610340600480360381019061033b9190611729565b610c8c565b60405161034d91906118c3565b60405180910390f35b34801561036257600080fd5b5061037d600480360381019061037891906116ed565b610f22565b60405161038a91906118c3565b60405180910390f35b61039b61129b565b005b3480156103a957600080fd5b506103b26114a2565b6040516103bf91906119c0565b60405180910390f35b3480156103d457600080fd5b506103ef60048036038101906103ea9190611662565b61153a565b6040516103fc91906119c0565b60405180910390f35b6000805461041290611d1a565b80601f016020809104026020016040519081016040528092919081815260200182805461043e90611d1a565b801561048b5780601f106104605761010080835404028352916020019161048b565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b505050505081565b600082600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fd90611900565b60405180910390fd5b82600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040516105e491906119c0565b60405180910390a3600191505092915050565b6000600260009054906101000a900460ff16600a6106159190611ad6565b620186a06106239190611bf4565b905090565b600083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069290611900565b60405180910390fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561070c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070390611900565b60405180910390fd5b858442600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411801561079b575080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b156108715780600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461082b9190611c4e565b101561086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611960565b60405180910390fd5b6108f4565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90611980565b60405180910390fd5b5b87878780600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156109b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ad90611940565b60405180910390fd5b88600360008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a059190611c4e565b9250508190555088600460008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a989190611c4e565b9250508190555088600360008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610aee9190611a2d565b925050819055508973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8b604051610b5291906119c0565b60405180910390a360019750505050505050509392505050565b600260009054906101000a900460ff1681565b600260199054906101000a900460ff1681565b600260159054906101000a900463ffffffff1681565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054610c0b90611d1a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3790611d1a565b8015610c845780601f10610c5957610100808354040283529160200191610c84565b820191906000526020600020905b815481529060010190602001808311610c6757829003601f168201915b505050505081565b60003373ffffffffffffffffffffffffffffffffffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1590611920565b60405180910390fd5b818060036000600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610dc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dba90611980565b60405180910390fd5b8260036000600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e349190611c4e565b9250508190555082600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e8a9190611a2d565b925050819055503373ffffffffffffffffffffffffffffffffffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610f1091906119c0565b60405180910390a36001915050919050565b600082600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8c90611900565b60405180910390fd5b338342600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015611024575080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b156110fa5780600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110b49190611c4e565b10156110f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ec90611960565b60405180910390fd5b61117d565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561117c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117390611980565b60405180910390fd5b5b84600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111cc9190611c4e565b9250508190555084600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112229190611a2d565b925050819055508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8760405161128691906119c0565b60405180910390a36001935050505092915050565b60003414156112df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d690611980565b60405180910390fd5b42600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611361576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611358906119a0565b60405180910390fd5b6000600260199054906101000a900460ff1660ff16346113819190611bf4565b905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113d29190611a2d565b9250508190555080600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114289190611c4e565b9250508190555061143a33824261155f565b3373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161149791906119c0565b60405180910390a350565b600042600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561153257600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050611537565b600090505b90565b6004602052816000526040600020602052806000526040600020600091509150505481565b600260159054906101000a900463ffffffff1663ffffffff16816115839190611a2d565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b60008135905061161e81611ee4565b92915050565b60008135905061163381611efb565b92915050565b60006020828403121561164b57600080fd5b60006116598482850161160f565b91505092915050565b6000806040838503121561167557600080fd5b60006116838582860161160f565b92505060206116948582860161160f565b9150509250929050565b6000806000606084860312156116b357600080fd5b60006116c18682870161160f565b93505060206116d28682870161160f565b92505060406116e386828701611624565b9150509250925092565b6000806040838503121561170057600080fd5b600061170e8582860161160f565b925050602061171f85828601611624565b9150509250929050565b60006020828403121561173b57600080fd5b600061174984828501611624565b91505092915050565b61175b81611c82565b82525050565b61176a81611c94565b82525050565b600061177b82611a11565b6117858185611a1c565b9350611795818560208601611ce7565b61179e81611daa565b840191505092915050565b60006117b6601b83611a1c565b91506117c182611dc8565b602082019050919050565b60006117d9601283611a1c565b91506117e482611df1565b602082019050919050565b60006117fc601e83611a1c565b915061180782611e1a565b602082019050919050565b600061181f601183611a1c565b915061182a82611e43565b602082019050919050565b6000611842601183611a1c565b915061184d82611e6c565b602082019050919050565b6000611865602f83611a1c565b915061187082611e95565b604082019050919050565b61188481611cc0565b82525050565b61189381611cca565b82525050565b6118a281611cda565b82525050565b60006020820190506118bd6000830184611752565b92915050565b60006020820190506118d86000830184611761565b92915050565b600060208201905081810360008301526118f88184611770565b905092915050565b60006020820190508181036000830152611919816117a9565b9050919050565b60006020820190508181036000830152611939816117cc565b9050919050565b60006020820190508181036000830152611959816117ef565b9050919050565b6000602082019050818103600083015261197981611812565b9050919050565b6000602082019050818103600083015261199981611835565b9050919050565b600060208201905081810360008301526119b981611858565b9050919050565b60006020820190506119d5600083018461187b565b92915050565b60006020820190506119f0600083018461188a565b92915050565b6000602082019050611a0b6000830184611899565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611a3882611cc0565b9150611a4383611cc0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a7857611a77611d4c565b5b828201905092915050565b6000808291508390505b6001851115611acd57808604811115611aa957611aa8611d4c565b5b6001851615611ab85780820291505b8081029050611ac685611dbb565b9450611a8d565b94509492505050565b6000611ae182611cc0565b9150611aec83611cda565b9250611b197fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611b21565b905092915050565b600082611b315760019050611bed565b81611b3f5760009050611bed565b8160018114611b555760028114611b5f57611b8e565b6001915050611bed565b60ff841115611b7157611b70611d4c565b5b8360020a915084821115611b8857611b87611d4c565b5b50611bed565b5060208310610133831016604e8410600b8410161715611bc35782820a905083811115611bbe57611bbd611d4c565b5b611bed565b611bd08484846001611a83565b92509050818404811115611be757611be6611d4c565b5b81810290505b9392505050565b6000611bff82611cc0565b9150611c0a83611cc0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c4357611c42611d4c565b5b828202905092915050565b6000611c5982611cc0565b9150611c6483611cc0565b925082821015611c7757611c76611d4c565b5b828203905092915050565b6000611c8d82611ca0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b60005b83811015611d05578082015181840152602081019050611cea565b83811115611d14576000848401525b50505050565b60006002820490506001821680611d3257607f821691505b60208210811415611d4657611d45611d7b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f5a65726f2061646472657373206973206e6f7420616c6c6f7765640000000000600082015250565b7f4d696e6572206973206e6f74206f776e65720000000000000000000000000000600082015250565b7f4e6f7420616c6c6f77656420746f207472616e7366657220746f6b656e730000600082015250565b7f546f6b656e732061726520766573746564000000000000000000000000000000600082015250565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b7f4e6f7420616c6c6f77656420746f2062757920746f6b656e73206d6f7265207460008201527f68616e206f6e63652061207765656b0000000000000000000000000000000000602082015250565b611eed81611c82565b8114611ef857600080fd5b50565b611f0481611cc0565b8114611f0f57600080fd5b5056fea26469706673582212207742eb911f20242715c66a342680d36c833ed4a28aa0e496aacd86f8053afc3164736f6c63430008040033";

type LeoTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LeoTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LeoToken__factory extends ContractFactory {
  constructor(...args: LeoTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LeoToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LeoToken> {
    return super.deploy(overrides || {}) as Promise<LeoToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LeoToken {
    return super.attach(address) as LeoToken;
  }
  connect(signer: Signer): LeoToken__factory {
    return super.connect(signer) as LeoToken__factory;
  }
  static readonly contractName: "LeoToken";
  public readonly contractName: "LeoToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LeoTokenInterface {
    return new utils.Interface(_abi) as LeoTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LeoToken {
    return new Contract(address, _abi, signerOrProvider) as LeoToken;
  }
}
