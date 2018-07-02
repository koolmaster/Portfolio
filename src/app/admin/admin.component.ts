import { Component, OnInit } from '@angular/core';

export interface GroupMenu {
  name: string;
  main: MainMenuItems[];
}

export interface MainMenuItems {
  title: string;
  icon: string;
  link: string;
  haveChild: boolean;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  title: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  open = false;
  menu: GroupMenu[] = [
    {
      name: 'Porfolio',
      main: [
        { title: 'Profile', icon: 'fa fa-user', haveChild: false, link: 'profile' },
        { title: 'Experience', icon: 'fa fa-laptop', haveChild: false, link: 'experience' },
        { title: 'Skill', icon: 'fa fa-address-card', haveChild: false, link: 'skill' },
        { title: 'Project', icon: 'fa fa-briefcase', haveChild: false, link: 'project' },
        { title: 'Blog', icon: 'fa fa-rss', haveChild: false, link: 'blog' }
      ]
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  openAccordion($ele) {
    this.open = $ele;
  }
}
