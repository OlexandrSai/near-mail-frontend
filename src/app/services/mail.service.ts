import {Injectable} from '@angular/core';
import {NearService} from "./near.service";

@Injectable({
  providedIn: 'root'
})
export class MailService {
  public myMessages = [];
  public isLoading = false;
  public err: any = null;

  constructor(public nearService: NearService) {
  }

  async loadMessages() {
    try {
      this.isLoading = true
      this.myMessages = await this.nearService.getMessages(this.nearService.accountId)
      this.isLoading = false
    } catch (e) {
      this.err = e
      console.log('error')
    }
  }


  async handleSendMessage({target_account_id, message}: { target_account_id: any, message: any }) {
    this.isLoading = true;
    await this.nearService.sendMessage({target_account_id, message});
    this.myMessages = await this.nearService.getMessages(this.nearService.accountId)
    this.isLoading = false
  }

  async handleDeleteAllMessages() {
    this.isLoading = true;
    await this.nearService.deleteAllMessages()
    this.myMessages = await this.nearService.getMessages(this.nearService.accountId)
    this.isLoading = false
  }
}
