import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../../provider/service/PortfolioService';
import { Persional, Social } from '../../../provider/model/persional';
import { AdminResolve } from '../../admin/admin.resolve';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AdminResolve]
})
export class ProfileComponent implements OnInit {
  userInfo: Persional;
  social: Social;
  @ViewChild('content') content: ElementRef;
  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) {

  }


  ngOnInit() {
    // linkCV: '../../../assets/file/TamLyHoc.pdf'
    this.userInfo = this.route.snapshot.data['persional'];
    this.portfolioService.getLinkSocial().subscribe(data => this.social = data);
  }

  public downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    }, function (dispose) {
      doc.save('Puppetboard.pdf');
    });
  }

}

