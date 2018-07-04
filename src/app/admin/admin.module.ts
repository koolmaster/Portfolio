import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../../provider/app-routing/app-routing.module';
import { CardToggleDirective } from './card/card-toggle.directive';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProfileAdminComponent } from './portfolio/profile-admin/profile-admin.component';
import { ExperienceAdminComponent } from './portfolio/experience-admin/experience-admin.component';
import { SkillAdminComponent } from './portfolio/skill-admin/skill-admin.component';
import { ProjectAdminComponent } from './portfolio/project-admin/project-admin.component';
import { BlogAdminComponent } from './portfolio/blog-admin/blog-admin.component';
import { DynamicComponentService } from '../../provider/service/DynamicComponentService';
import { PortfolioService } from '../../provider/service/PortfolioService';

@NgModule({
  declarations: [
    CardToggleDirective,
    AdminComponent,
    CardComponent,
    LoginComponent,
    SpinnerComponent,
    ProfileAdminComponent,
    ExperienceAdminComponent,
    SkillAdminComponent,
    ProjectAdminComponent,
    BlogAdminComponent,
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
  ],
  providers: [
    DatePipe,
    DynamicComponentService,
    PortfolioService
  ],
})
export class AdminModule { }
