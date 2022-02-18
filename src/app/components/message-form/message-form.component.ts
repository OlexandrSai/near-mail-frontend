import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MailService} from "../../services/mail.service";

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

  constructor(private mailService: MailService) { }

  closeModal() {
    this.modalOpen = false;
    this.modalOpenChange.emit(this.modalOpen);
  }

  async handleSubmit() {
    await this.mailService.handleSendMessage(this.data);
  }
}
