import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  private arrPie: any;
  private options: any;
  private lstSkill: any;
  private lstSubSkill: any;
  constructor() {
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
    this.lstSkill = [
      { title: 'Html & Css', percentage: '95%' },
      { title: 'Jquery', percentage: '90%' },
      { title: 'Sass', percentage: '85%' },
      { title: 'Angular', percentage: '75%' },
      { title: 'Vuejs', percentage: '40%' },
      { title: 'Photoshop', percentage: '90%' },
    ];
    this.arrPie = [
      { percent: 45, name: 'English' },
      { percent: 85, name: 'Creativity' },
      { percent: 78, name: 'Teamwork' }
    ];
    this.lstSubSkill = [
      'Photography',
      'Blend & Retouch',
      'Mobile App & Web Design',
      'UX and UI Design',
      'Mobile developer',
      'Ionic 1 , 3'
    ];
  }

  ngOnInit() {
  }

}
