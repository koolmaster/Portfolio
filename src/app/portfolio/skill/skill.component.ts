import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  private arrPie: any;
  private options: any;
  constructor() {
    this.arrPie = [
      { percent: 45, name: 'English' },
      { percent: 85, name: 'Creativity' },
      { percent: 78, name: 'Teamwork' }
    ];
    this.options = {
      barColor: '#747474',
      trackColor: '#fff',
      scaleColor: '#fff',
      scaleLength: 5,
      lineCap: 'spuare',
      lineWidth: 8,
      animate: {
        duration: 1000,
        enabled: true
      }
    };
  }

  ngOnInit() {
  }

}
