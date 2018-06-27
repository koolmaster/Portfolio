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
        img: `./././assets/img/project/p-1.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'dev'
      },
      {
        img: `./././assets/img/project/p-2.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'web'
      },
      {
        img: `./././assets/img/project/p-3.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
      {
        img: `./././assets/img/project/p-4.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'app'
      },
      {
        img: `./././assets/img/project/p-5.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'web'
      },
      {
        img: `./././assets/img/project/p-6.jpg`,
        des: `Đây là sản phẩm của tui`,
        link: `#`,
        type: ['Angular', 'C#'],
        filter: 'dev'
      }
    ];
    setTimeout(() => {
      const containerEl = document.querySelector('.container');
      this.mixer = mixitup(containerEl, {
        animation: {
          effects: 'fade scale stagger(50ms)'
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
              effects: 'fade scale'
            }
          });
        });
    }, 500);
  }
}
