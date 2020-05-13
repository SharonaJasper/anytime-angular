import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Registration } from '../registration';
import { EventService } from './event.service';
import { AlleventService } from './allevent.service';
import { User } from 'src/app/user';
import { Event } from './event';
import { Allevent } from './allevent';

@Component({
  selector: 'app-grouppage',
  templateUrl: './grouppage.component.html',
  styleUrls: ['./grouppage.component.css']
})
export class GrouppageComponent implements OnInit {

  logins: Login[];
  registrations: Registration[];
  event = new Event()
  allevents: Allevent[];
  events: Event[];
  allevent = new Allevent()
  user = new User()
  users: User[];

  constructor(public userService: UserService, public eventService: EventService, public alleventService: AlleventService, private router: Router) { }


  ngOnInit(): void {
    this.reloadAll();
  }

  reloadAll() {
    this.userService.findAll().subscribe(
      rgs => {
        this.registrations = rgs;
      },
      err => {
        console.log(err);
      }
    );
  }


  delete(iduser) {
    this.userService.delete(iduser).subscribe(
      () => this.reloadAll()
    );
  }

  deleteregistration(iduser) {
    this.userService.delete(iduser).subscribe(
      () => this.reloadAll()
    );
    sessionStorage.clear();
    this.router.navigate([''])
  }

  deleteaccount(){
    this.eventService.deleteaccount().subscribe(
      () => {
      this.reloadAllallevents()
      this.reloadAlleventsbyevent()
      this.reloadAll()
      }
    )
  }

  reloadAllallevents() {
    this.alleventService.findAllallevents().subscribe(
      allevents => {
        this.allevents = allevents;
      }
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

  currentUsername = sessionStorage.getItem('username')
  currentID = sessionStorage.getItem('iduser')

  logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }



}
