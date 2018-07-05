import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Persional } from '../../../../provider/model/persional';
import { PortfolioService } from '../../../../provider/service/PortfolioService';
import { porfolio } from '../../../app.contans';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss'],
})
export class ProfileAdminComponent implements OnInit {
  titleBlock1 = 'Profile';
  subtitleBlock1 = 'Edit personal information';
  iconClass1 = 'fa fa-user';
  titleBlock2 = 'Education';
  subtitleBlock2 = 'Edit the learning timeline';
  iconClass2 = 'fa fa-book';
  titleBlock3 = 'Interest';
  subtitleBlock3 = 'Edit interest list';
  iconClass3 = 'fa fa-gamepad';
  persional: Persional;
  education: any;
  public min = new Date(1992, 7, 14, 0, 0);
  constructor(
    private http: Http,
    private datePipe: DatePipe,
    private portfolioService: PortfolioService
  ) {

  }

  ngOnInit() {
    this.persional = JSON.parse(localStorage.getItem(porfolio.userLocalStorage));
    this.portfolioService.getListEducation().subscribe((data) => {
      this.education = data;
    });

  }

  updateProfile() {
    this.portfolioService.updateProfile(this.persional);
    window.location.reload();
  }

}
