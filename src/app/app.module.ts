import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
//#region  -- KHAI BÁO COMPONENT --
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './portfolio/profile/profile.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { SkillComponent } from './portfolio/skill/skill.component';
import { EducationComponent } from './portfolio/education/education.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { InterestComponent } from './portfolio/interest/interest.component';
import { ContactComponent } from './portfolio/contact/contact.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 6,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProfileComponent,
    ExperienceComponent,
    SkillComponent,
    EducationComponent,
    ProjectComponent,
    InterestComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    EasyPieChartModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
