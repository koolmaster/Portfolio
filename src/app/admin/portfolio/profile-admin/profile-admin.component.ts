import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  titleBlock1 = 'Profile';
  titleBlock2 = 'Education';
  titleBlock3 = 'Interest';
  constructor() { }

  ngOnInit() {
  }

}
