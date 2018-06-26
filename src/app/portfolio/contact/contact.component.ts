import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private txtName: String;
  private txtEmail: String;
  private txtSubject: any;
  private txtMessage: any;
  constructor() {

  }

  ngOnInit() {
  }

  sendMail() {

  }

}
