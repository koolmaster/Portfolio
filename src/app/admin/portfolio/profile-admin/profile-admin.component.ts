import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Persional } from '../../../../provider/model/persional';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  titleBlock1 = 'Profile';
  titleBlock2 = 'Social';
  titleBlock3 = 'Education';
  titleBlock4 = 'Interest';
  persional: Persional;
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/Persional')
      .subscribe(data => {
        this.persional = data.json() as Persional;
      });
  }

  updateProfile() {
  }

}
