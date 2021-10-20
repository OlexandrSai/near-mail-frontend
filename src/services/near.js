import { keyStores, Near, WalletConnection, utils } from "near-api-js"; //utils
import BN from "bn.js";

export const CONTRACT_ID = "dev-1634694940112-40194560672775";
const gas = new BN("100000000000000");

// use new NEAR to avoid async/await
export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  export const wallet = new WalletConnection(near, "messagebox");

  //function to get all  income messages
  export const getMessages = (accountId) => {
    return wallet.account().viewFunction(CONTRACT_ID,"retrieveMessages", {accountId:accountId})
  };

  //function to delete all messages
  export const deleteAllMessages = () => {
    return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "deleteAllMessages",
      gas,
  })
  };

  //function to send message
  export const sendMessage = ({target_account_id, message}) => {
    console.log()
    const attachedDeposit = utils.format.parseNearAmount("0.001")
    console.log(attachedDeposit)
    return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "sendMessage",
      gas,
      args: {target_account_id, message},
      attachedDeposit
  })
  };