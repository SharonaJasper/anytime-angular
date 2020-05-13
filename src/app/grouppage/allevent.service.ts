import { Injectable } from '@angular/core';
import { Allevent } from './allevent';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlleventService {

  constructor(private http: HttpClient) { }

  findAllallevents(): Observable<Allevent[]> {
    return this.http.get<any>('http://localhost:8080/allevent')
  }

  saveallevents(allevents: Allevent) {
    return this.http.post('http://localhost:8080/allevent', allevents)
  }

  deleteallevents(idevent) {
    return this.http.delete('http://localhost:8080/allevent/' + idevent)
  }


  findevent(allevent: Allevent): Observable<Allevent> {
    return this.http.post<any>('http://localhost:8080/findevent', allevent)
  }

}
