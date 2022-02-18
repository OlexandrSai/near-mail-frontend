import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {keyStores, Near, utils, WalletConnection} from "near-api-js";
import {Router} from "@angular/router";

// @ts-ignore
import BN from "bn.js";


@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.NG_APP_CONTRACT_ID;
  public gas = new BN(environment.NG_APP_gas);
  public near = new Near({
    networkId: environment.NG_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NG_APP_nodeUrl,
    walletUrl: environment.NG_APP_walletUrl,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "meme-museum");

  constructor(private router: Router) {
    this.accountId = this.wallet.getAccountId();
  }

  async handleSignIn() {
    await this.wallet.requestSignIn({
      contractId: this.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut() {
    this.wallet.signOut()
    this.accountId = ''
    this.router.navigate(['']);
  };

  //function to get all  income messages
  getMessages(accountId: any) {
    return this.wallet.account().viewFunction(this.CONTRACT_ID,"retrieveMessages", {accountId:accountId})
  };

  //function to delete all messages
  deleteAllMessages() {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "deleteAllMessages",
      gas: this.gas,
      args: {}
    })
  };

  //function to send message
  sendMessage({target_account_id, message}: {target_account_id: any, message: any}) {
    const attachedDeposit: any = utils.format.parseNearAmount("0.001")
    const attachedDepositBN = new BN(attachedDeposit);

    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "sendMessage",
      gas: this.gas,
      args: {target_account_id, message},
      attachedDeposit: attachedDepositBN
    })
  };

  setContract(contract: any) {
    this.CONTRACT_ID = contract;
  }

  restoreDefaultContract() {
    this.CONTRACT_ID = environment.NG_APP_CONTRACT_ID
  }
}
