import { Component, OnInit, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { DynamicComponentService } from '../../provider/sevice/DynamicComponentService';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { InterestComponent } from './interest/interest.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  lst: any;
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  service: any;
  noScroll = false;
  constructor(
    @Inject(DynamicComponentService) service
  ) {
    this.lst = [
      SocialComponent,
      ContactComponent,
      InterestComponent,
      ProjectComponent,
      EducationComponent,
      SkillComponent,
      ExperienceComponent,
    ];
    this.service = service;
  }

  ngOnInit() {

  }

  onScroll() {
    const component = this.lst.pop();
    if (component != null) {
      this.service.setRootViewContainerRef(this.viewContainerRef);
      this.service.addDynamicComponent(component);
    } else {
      this.noScroll = true;
    }
  }
}
