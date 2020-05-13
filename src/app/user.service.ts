import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Registration[]>  {
    return this.http.get<any>('http://localhost:8080/register')
  }

  save(registration: Registration) {
    return this.http.post('http://localhost:8080/register', registration)
  }

  delete(iduser) {
    return this.http.delete('http://localhost:8080/register/' + iduser)
  }

  savelogin(login: Login): Observable<Login> {
    return this.http.post<any>('http://localhost:8080/login', login)
  }


}
