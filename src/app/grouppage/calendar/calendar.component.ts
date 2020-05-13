import { Component, OnInit } from '@angular/core';
import { AlleventService } from '../allevent.service';
import { Event } from '../event';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: Event[];

  constructor(private alleventService: AlleventService, private eventService: EventService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadAllallevents();
  }

  reloadAllallevents() {
    this.eventService.findAlleventsbyuser().subscribe(
      events => {
        this.events = events;
      }
    );
  }

  deleteallevents(idevent) {
    this.alleventService.deleteallevents(idevent).subscribe(
      () => this.reloadAllallevents()
    );
  }

  currentUsername = sessionStorage.getItem('username')

  logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }

}
