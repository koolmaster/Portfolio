import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionGroupComponent } from './accordion/AccordionGroup';
import { AccordionComponent } from './accordion/Accordion';
import { AppRoutingModule } from '../../provider/app-routing/app-routing.module';
import { CardToggleDirective } from './card/card-toggle.directive';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ProfileAdminComponent } from './portfolio/profile-admin/profile-admin.component';
import { ExperienceAdminComponent } from './portfolio/experience-admin/experience-admin.component';
import { SkillAdminComponent } from './portfolio/skill-admin/skill-admin.component';
import { ProjectAdminComponent } from './portfolio/project-admin/project-admin.component';
import { BlogAdminComponent } from './portfolio/blog-admin/blog-admin.component';
import { EducationAdminComponent } from './portfolio/education-admin/education-admin.component';
import { DynamicComponentService } from '../../provider/service/DynamicComponentService';
import { PortfolioService } from '../../provider/service/PortfolioService';
import { AdminResolve } from './admin.resolve';
import { ModalToggleDirective } from './modal/modal-toggle.directive';

@NgModule({
  declarations: [
    CardToggleDirective,
    ModalToggleDirective,
    AdminComponent,
    CardComponent,
    AccordionComponent,
    AccordionGroupComponent,
    LoginComponent,
    ProfileAdminComponent,
    ExperienceAdminComponent,
    SkillAdminComponent,
    ProjectAdminComponent,
    BlogAdminComponent,
    EducationAdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    CardToggleDirective,
    ModalToggleDirective
  ],
  providers: [
    DatePipe,
    AdminResolve,
    DynamicComponentService,
    PortfolioService
  ],
})
export class AdminModule { }
