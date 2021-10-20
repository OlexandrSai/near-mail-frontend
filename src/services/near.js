import { keyStores, Near, WalletConnection } from "near-api-js"; //utils
//import BN from "bn.js";

export const CONTRACT_ID = "dev-1634694940112-40194560672775";
//const gas = new BN("100000000000000");

// use new NEAR to avoid async/await
export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  export const wallet = new WalletConnection(near, "messagebox");

//   export const getTempDesign = (accountId) => {
//     return  wallet.account().viewFunction(CONTRACT_ID,"getTempDesign", {accountId:accountId})
//   }

//   export const getViewMyDesign = (accountId) => {
//     return  wallet.account().viewFunction(CONTRACT_ID,"viewMyDesign", {accountId:accountId})
//   }

  //function to get all  income messages
  export const getMessages = (accountId) => {
    return wallet.account().viewFunction(CONTRACT_ID,"retrieveMessages", {accountId:accountId})
  //   return wallet.account().functionCall({
  //     contractId: CONTRACT_ID,
  //     methodName: "retrieveMessages",
  //     gas
  // })
  };

//   //function to claim existing design
//   export const claimDesign = (seed) => {
//     return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "claimMyDesign",
//       gas,
//       args:{seed:seed}
//   })
//   };

//   //function to burn design
//   export const burnDesign = () => {
//     return wallet.account().functionCall({
//       contractId: CONTRACT_ID,
//       methodName: "burnMyDesign",
//       gas
//   })
//   };