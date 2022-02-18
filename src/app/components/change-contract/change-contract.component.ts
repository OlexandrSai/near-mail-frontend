import { Component } from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-change-contract',
  templateUrl: './change-contract.component.html',
  styleUrls: ['./change-contract.component.css']
})
export class ChangeContractComponent {
  public contractId: any;
  public popupShow = false;
  constructor(public mailService: MailService) { }

  async setContract() {
    if (this.contractId && this.contractId !== '') {
      await this.mailService.nearService.setContract(this.contractId);
      await this.mailService.loadMessages();
    }
  }
}
