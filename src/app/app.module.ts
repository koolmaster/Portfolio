import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//#region  -- KHAI BÁO COMPONENT --
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './portfolio/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
