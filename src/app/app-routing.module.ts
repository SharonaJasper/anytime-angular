import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { GrouppageComponent } from './grouppage/grouppage.component';
import { EventComponent } from './grouppage/event/event.component';
import { CalendarComponent } from './grouppage/calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { PageNotFoundRegisterComponent } from './page-not-found-register/page-not-found-register.component';
import { PageNotFoundLoginComponent } from './page-not-found-login/page-not-found-login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},

    { 
      path: 'grouppage', 
      component: GrouppageComponent 
    },
    { 
      path: 'events', 
      component: EventComponent 
    },
    { 
      path: 'calendar', 
      component: CalendarComponent 
    },
    { path:'errorregister', component: PageNotFoundRegisterComponent },
    { path:'errorlogin', component: PageNotFoundLoginComponent },
    { path:'**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
