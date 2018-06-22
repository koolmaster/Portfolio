import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private lst: any;
  constructor() {
    this.lst = [
      {
        time: 'Jan 2016 - July 2017',
        job: 'Front-end Developer',
        company: 'Haravan',
        description:
        `Lorem ipsum dolor sit amet, consectetur adipisci ng elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta
          massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.`
      },
      {
        time: 'July 2017 - Current',
        job: 'Front-End Developer and App Designer',
        company: 'FPT Infomation System',
        description:
          `Lorem ipsum dolor sit amet, consectetur adipisci ng elit. In semper lacus tortor, quis bibendum odio mattis vitae. Cras porta
          massa pretium auctor congue. Suspendisse ante massa, euismod sit amet sem sed, viverra tristique diam.`
      },
    ];
  }

  ngOnInit() {
  }

}
