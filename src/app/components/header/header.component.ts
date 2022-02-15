import { Component, OnInit } from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public mailService: MailService) { }

  ngOnInit(): void {
  }

  async signIn() {
    await this.mailService.nearService.handleSignIn();
  }
}
