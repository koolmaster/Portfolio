import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
//#region  -- KHAI BÁO COMPONENT --
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './portfolio/profile/profile.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { SkillComponent } from './portfolio/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProfileComponent,
    ExperienceComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    EasyPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
