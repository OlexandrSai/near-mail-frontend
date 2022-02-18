import {Component, OnInit} from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public modalOpen = false;
  public search = '';
  public messages: any[] = [];
  public searchableColumns = ['message', 'sender'];

  constructor(public mailService: MailService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.mailService.loadMessages();
    this.messages = this.mailService.myMessages;
  }

  async searchChange() {
    this.messages = this.mailService.myMessages;

    if (this.messages && this.search !== '') {
      let highlightData = this.messages.map((message) => {
        const highlightText: any = {};
        this.searchableColumns.map((keyColumn) => {
          highlightText[keyColumn] = message?.[keyColumn].replace(
            new RegExp(
              this.search.replace(/[*[&<$.|^>\\/\]"?()+]/g, (s) => {
                return '\\' + s;
              }),
              'gi'
            ),
            (str: any) => {
              return str ? `${'<mark>' + str + '</mark>'}` : str;
            }
          );
        });
        return {...message, ...highlightText};
      });

      if (this.search) {
        highlightData = highlightData.filter((message, id) =>
          this.searchableColumns.some((keyColumn) => message[keyColumn] !== this.messages[id][keyColumn])
        );
      }

      this.messages = highlightData;
    }
  }
}
