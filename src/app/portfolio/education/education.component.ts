import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../provider/service/PortfolioService';
import { Education } from '../../../provider/model/persional';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  lstEducation: Education;
  constructor(private porfolioService: PortfolioService) { }

  ngOnInit() {
    this.porfolioService.getListEducation().subscribe(data => this.lstEducation = data);
  }

}
