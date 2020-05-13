import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
import { User } from '../user';
import { Allevent } from './allevent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http: HttpClient) { }

  findAlleventsbyevent(): Observable<Event[]>  {
    let event = new Event();
    let allevent = new Allevent();
    allevent.idevent = Number(sessionStorage.getItem('idevent')); 

    event.allevent = allevent;
    return this.http.post<any>('http://localhost:8080/eventsbyevent', event)
  }


  findAlleventsbyuser(): Observable<Event[]>  {
    let event = new Event();
    let user = new User();
    user.iduser = Number(sessionStorage.getItem('iduser')); 

    event.user = user;
    return this.http.post<any>('http://localhost:8080/eventsbyuser', event)
  }


  saveevents(event: Event): Observable<Event[]> {
    let user = new User();
    user.iduser = Number(sessionStorage.getItem('iduser'));
 
    let allevent = new Allevent();
    allevent.idevent = Number(sessionStorage.getItem('idevent')); 

    event.user = user;
    event.allevent = allevent;

    return this.http.post<any>("http://localhost:8080/event", event)
  }

  logoutevent(): Observable<Event[]> {
    let event = new Event();
    let user = new User();
    user.iduser = Number(sessionStorage.getItem('iduser'));
 
    let allevent = new Allevent();
    allevent.idevent = Number(sessionStorage.getItem('idevent')); 

    event.user = user;
    event.allevent = allevent;
    return this.http.post<any>('http://localhost:8080/logoutevent', event)
  }

  deleteaccount(): Observable<Event[]> {
    let event = new Event();
    let user = new User();
    user.iduser = Number(sessionStorage.getItem('iduser'));

    event.user = user;
    return this.http.post<any>('http://localhost:8080/deleteaccount', event)
  }

  deleteevent(): Observable<Event[]> {
    let event = new Event();
 
    let allevent = new Allevent();
    allevent.idevent = Number(sessionStorage.getItem('idevent')); 

    event.allevent = allevent;
    return this.http.post<any>('http://localhost:8080/deleteevent', event)
  }

  deleteevents(id) {
    return this.http.delete('http://localhost:8080/event/' + id)
  }





  // findbyevent(event: Event): Observable<Event[]> {
  //   let allevent = new Allevent();
  //   allevent.idevent = Number(sessionStorage.getItem('idevent')); 
  //   event.allevent = allevent;
  //   return this.http.post<any>("http://localhost:8080/eventsbyevent", event)
  // }


}