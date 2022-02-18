import { Component } from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public mailService: MailService) { }

  async signIn() {
    await this.mailService.nearService.handleSignIn();
  }
}
