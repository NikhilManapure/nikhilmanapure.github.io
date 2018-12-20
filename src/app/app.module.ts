import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AppsPageComponent } from './components/apps-page/apps-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ResumePageComponent,
    ContactPageComponent,
    AppsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
