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
  titleBlock2 = 'Social';
  titleBlock3 = 'Education';
  titleBlock4 = 'Interest';
  persional: Persional;
  public min = new Date(1992, 7, 14, 0, 0);
  constructor(
    private http: Http,
    private datePipe: DatePipe,
    private portfolioService: PortfolioService
  ) {
    this.persional = JSON.parse(localStorage.getItem(porfolio.userLocalStorage));
  }

  ngOnInit() {
  }

  updateProfile() {
    this.portfolioService.updateProfile(this.persional);
    window.location.reload();
  }

}
