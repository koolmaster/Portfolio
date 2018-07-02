import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from '../../app/portfolio/portfolio.component';
//#region  -- KHAI BÁO COMPONENT ADMIN --
import { AdminComponent } from '../../app/admin/admin.component';
import { LoginComponent } from '../../app/admin/login/login.component';
import { ProfileAdminComponent } from '../../app/admin/portfolio/profile-admin/profile-admin.component';
import { ExperienceAdminComponent } from '../../app/admin/portfolio/experience-admin/experience-admin.component';
import { SkillAdminComponent } from '../../app/admin/portfolio/skill-admin/skill-admin.component';
import { ProjectAdminComponent } from '../../app/admin/portfolio/project-admin/project-admin.component';
import { BlogAdminComponent } from '../../app/admin/portfolio/blog-admin/blog-admin.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'profile' , pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileAdminComponent },
      { path: 'experience', component: ExperienceAdminComponent },
      { path: 'skill', component: SkillAdminComponent },
      { path: 'project', component: ProjectAdminComponent },
      { path: 'blog', component: BlogAdminComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
