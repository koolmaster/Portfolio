import { Component, OnInit } from '@angular/core';
declare var require;
const mixitup = require('mixitup');

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  lstProject: any;
  type: any;
  mixer: any;
  constructor() {

  }

  ngOnInit() {
    this.lstProject = [
      {
        id: 1,
        img: `./././assets/img/project/p-1.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'dev'
      },
      {
        id: 2,
        img: `./././assets/img/project/p-2.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'web'
      },
      {
        id: 3,
        img: `./././assets/img/project/p-3.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
      {
        id: 4,
        img: `./././assets/img/project/p-4.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
      {
        id: 5,
        img: `./././assets/img/project/p-5.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'web'
      },
      {
        id: 6,
        img: `./././assets/img/project/p-6.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'dev'
      }
    ];
    setTimeout(() => {
      const containerEl = document.querySelector('[data-ref="container"]');
      this.mixer = mixitup(containerEl, {
        animation: {
          effects: 'fade scale stagger(50ms)',
          perspectiveDistance: '1000px'
        },
        load: {
          filter: 'none'
        }
      });
      containerEl.classList.add('mixitup-ready');
      const self = this;
      this.mixer.show()
        .then(function () {
          self.mixer.configure({
            animation: {
              effects: 'fade scale stagger(50ms)',
              perspectiveDistance: '2000px'
            }
          });
        });
    }, 500);
  }
}
