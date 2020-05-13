import { Component, OnInit, Input } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { Allevent } from '../allevent';
import { AlleventService } from '../allevent.service';
import { Event } from '../event';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { Location } from '@angular/common'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event = new Event()
  allevents: Allevent[];
  events: Event[];
  allevent = new Allevent()
  user = new User()
  users: User[];


  constructor(private userService: UserService, private eventService: EventService, private alleventService: AlleventService, private router: Router, public location : Location) { }

  ngOnInit(): void {
    this.reloadAllallevents();
    this.reloadAlleventsbyevent();
  }

  public saveallevents() {
    this.alleventService.saveallevents(this.allevent).subscribe(
      () => this.reloadAllallevents()
    )
  }

  public saveevents() {
    this.eventService.saveevents(this.event).subscribe(
      () => this.reloadAlleventsbyevent());
  }


  reloadAllallevents() {
    this.alleventService.findAllallevents().subscribe(
      allevents => {
        this.allevents = allevents;
      }
    );
  }

  deleteallevents(idevent) {
    this.alleventService.deleteallevents(idevent).subscribe(
      () => this.reloadAllallevents()
    );
  }

  reloadAlleventsbyevent() {
    this.eventService.findAlleventsbyevent().subscribe(
      events => {
        this.events = events;
      },
      err => {
        console.log(err);
      }
    );
  }

  // deleteevents(id) {
  //   this.eventService.deleteevents(id).subscribe(
  //     () => this.reloadAlleventsbyevent()
  //   );
  // }

  reloadAllusers() {
    this.userService.findAll().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  logoutevent(){
    this.eventService.logoutevent().subscribe(
      () => this.reloadAlleventsbyevent()
    )
  }

  deleteevent(){
    this.eventService.deleteevent().subscribe(
      () => {
      this.reloadAllallevents()
      this.reloadAlleventsbyevent()
      }
    )
  }
  



  public findevent() {
    this.alleventService.findevent(this.allevent).subscribe(
      currentEvent => { 
      sessionStorage.setItem('eventname', currentEvent.eventname)
      sessionStorage.setItem('eventlocation', currentEvent.eventlocation)
      sessionStorage.setItem('eventdescription', currentEvent.eventdescription)
      sessionStorage.setItem('eventdateformatted', currentEvent.eventdateformatted)
      sessionStorage.setItem('eventdate', JSON.stringify(currentEvent.eventdate))
      sessionStorage.setItem('idevent', JSON.stringify(currentEvent.idevent))
      window.location.reload(true);
      }
    )
  }



  currentEventname = sessionStorage.getItem('eventname')
  currentEventlocation = sessionStorage.getItem('eventlocation')
  currentEventdescription = sessionStorage.getItem('eventdescription')
  currentEventdate = sessionStorage.getItem('eventdateformatted')
  currentEventID = sessionStorage.getItem('idevent')


  currentUsername = sessionStorage.getItem('username')
  currentID = sessionStorage.getItem('iduser')

  logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }

}
