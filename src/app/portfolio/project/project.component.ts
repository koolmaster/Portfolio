import { Component, OnInit } from '@angular/core';
const mixitup = require('mixitup');
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private lstProject: any;
  private type: any;
  private filterIndex = 0;
  private mixer: any;
  constructor() {
    this.lstProject = [
      {
        img: `http://junaidhira.com/demo/html/tile/img/portfolio/p-1.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'dev'
      },
      {
        img: `http://junaidhira.com/demo/html/tile/img/portfolio/p-4.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'web'
      },
      {
        img: `http://junaidhira.com/demo/html/tile/img/portfolio/p-2.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
      {
        img: `http://junaidhira.com/demo/html/tile/img/portfolio/p-3.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
    ];

  }

  ngOnInit() {
    this.mixer = mixitup('.lst2-2');
    this.mixer.filter('.web');
    console.log(this.mixer.filter('.web'));
  }

  selector($active) {
    this.filterIndex = $active;
  }

}
