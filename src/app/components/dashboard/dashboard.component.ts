import { Component, OnInit } from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public modalOpen = false;
  constructor(public mailService: MailService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.mailService.loadMessages();
  }
}
