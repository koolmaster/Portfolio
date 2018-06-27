import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  txtName: String;
  txtEmail: String;
  txtSubject: any;
  txtMessage: any;
  constructor() {

  }

  ngOnInit() {
  }

  sendMail() {

  }

}
