import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Contract, keyStores, Near, utils, WalletConnection } from "near-api-js";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.CONTRACT_ID;
  public near: Near;
  public wallet: WalletConnection;
  public messageContract: any;


  constructor(private router: Router) {
    // connecting to NEAR
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });

    // create wallet connection
    this.wallet = new WalletConnection(this.near, "messagebox");
    // get contracts
    this.accountId = this.wallet.getAccountId();
    this.messageContract = this.getMessageContract()
  }

  getMessageContract() {
    return new Contract(
      this.wallet.account(),
      environment.CONTRACT_ID,
      {
        viewMethods: ['retrieveMessages'],
        changeMethods: ['deleteAllMessages', 'sendMessage']
      }
    )
  }

  // get all income messages
  async getMessages(accountId: any) {
    return await this.messageContract.retrieveMessages({ accountId: accountId });
  };

  // delete all messages
  async deleteAllMessages() {
    return await this.messageContract.deleteAllMessages();
  };

  // send message
  async sendMessage({ target_account_id, message }: { target_account_id: any, message: any }) {
    const attachedDeposit: any = utils.format.parseNearAmount("0.001")
    return await this.messageContract.sendMessage(
      { target_account_id, message },
      environment.GAS,
      attachedDeposit
    )
  };

  setContract(contract: any) {
    this.CONTRACT_ID = contract;
  }

  restoreDefaultContract() {
    this.CONTRACT_ID = environment.CONTRACT_ID
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
}
