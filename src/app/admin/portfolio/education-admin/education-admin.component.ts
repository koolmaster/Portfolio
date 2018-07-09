import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../provider/service/PortfolioService';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.scss']
})
export class EducationAdminComponent implements OnInit {
  education: any;
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.portfolioService.getListEducation().subscribe((data) => {
      this.education = data;
    });
  }

  updateEducation(data) {
    this.portfolioService.updateEducation(data);
  }

}
