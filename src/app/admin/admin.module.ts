import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../../provider/app-routing/app-routing.module';
import { DynamicComponentService } from '../../provider/service/DynamicComponentService';
import { CardToggleDirective } from './card/card-toggle.directive';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProfileAdminComponent } from './portfolio/profile-admin/profile-admin.component';
import { ExperienceAdminComponent } from './portfolio/experience-admin/experience-admin.component';
import { SkillAdminComponent } from './portfolio/skill-admin/skill-admin.component';
import { ProjectAdminComponent } from './portfolio/project-admin/project-admin.component';
import { BlogAdminComponent } from './portfolio/blog-admin/blog-admin.component';

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
    CommonModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    CardToggleDirective,
  ],
  providers: [
    DynamicComponentService
  ],
})
export class AdminModule { }
