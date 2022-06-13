import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MailService } from "../../services/mail.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  @Input() public modalOpen: boolean = false;
  @Output() public modalOpenChange = new EventEmitter<boolean>();
  public data = {
    target_account_id: '',
    message: ''
  }

  constructor(private mailService: MailService, private toast: ToastrService) {
  }

  closeModal() {
    this.modalOpen = false;
    this.modalOpenChange.emit(this.modalOpen);
  }

  async handleSubmit() {
    // Not possible to send a message to yourself
    if (this.data.target_account_id === '') {
      this.toast.error('Invalid receiver Id');
      return
    }

    // Not possible to send a message to yourself
    if (this.data.target_account_id === this.mailService.nearService.accountId) {
      this.toast.error('Not possible to send a message to yourself');
      return
    }

    await this.mailService.handleSendMessage(this.data);
  }
}
