import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Persional, Social } from '../../../../provider/model/persional';
import { PortfolioService } from '../../../../provider/service/PortfolioService';
import { DatePipe } from '@angular/common';
import * as nation from '../../../../provider/data/nationality.json';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss'],
})
export class ProfileAdminComponent implements OnInit {
  titleBlock1 = 'Profile';
  subtitleBlock1 = 'Edit personal information';
  iconClass1 = 'fa fa-user';
  titleBlock3 = 'Interest';
  subtitleBlock3 = 'Edit interest list';
  iconClass3 = 'fa fa-gamepad';

  persional: Persional;
  social: Social;
  nationality: any;
  modalOpen = false;
  public min = new Date(1992, 7, 14, 0, 0);
  collape = -1;
  constructor(
    private http: Http,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {

  }

  ngOnInit() {
    this.persional = this.route.snapshot.data['persional'];
    this.portfolioService.getLinkSocial().subscribe(data => this.social = data);
    this.nationality = nation;
  }

  updateProfile() {
    this.portfolioService.updateProfile(this.persional);
    window.location.reload();
  }

  updateSocial(data) {
    this.portfolioService.updateLinkSocial(data);
    window.location.reload();
  }

  toggleOpen(temp) {
    if (temp === this.collape) {
      this.collape = -1;
    } else {
      this.collape = temp;
    }
  }

  openModal() {
    console.log(this.modalOpen);
    this.modalOpen = true;
  }

}
