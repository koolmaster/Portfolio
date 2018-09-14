import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../provider/service/PortfolioService';
import { Interest } from '../../../provider/model/persional';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  interest: Interest;
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.portfolioService.getListInterest().subscribe(data => this.interest = data);
  }

}
