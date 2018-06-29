import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from '../../app/portfolio/portfolio.component';
import { AdminComponent } from '../../app/admin/admin.component';
import { LoginComponent } from '../../app/admin/login/login.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: '', redirectTo: 'login' , pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
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
