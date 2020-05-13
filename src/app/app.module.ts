import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GrouppageComponent } from './grouppage/grouppage.component';
import { CalendarComponent } from './grouppage/calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { EventComponent } from './grouppage/event/event.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundLoginComponent } from './page-not-found-login/page-not-found-login.component';
import { PageNotFoundRegisterComponent } from './page-not-found-register/page-not-found-register.component';

@NgModule({
  declarations: [
    AppComponent,
    GrouppageComponent,
    CalendarComponent,
    HomepageComponent,
    EventComponent,
    PageNotFoundComponent,
    PageNotFoundLoginComponent,
    PageNotFoundRegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
