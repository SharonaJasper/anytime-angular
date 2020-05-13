import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  login = new Login()


  registration = new Registration()
  registrations: Registration[];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.reloadAll();
  }

  reloadAll() {
    this.userService.findAll().subscribe(
      rgs => {
        this.registrations = rgs;
      }
    );
  }

  public save() {
    this.userService.save(this.registration).subscribe(
      () => this.reloadAll(), 
      err => {
        this.router.navigate(['errorregister'])
      }
    );
  }


  delete(iduser) {
    this.userService.delete(iduser).subscribe(
      () => this.reloadAll()
    );
  }


  public savelogin() {
    this.userService.savelogin(this.login).subscribe(
      currentUser => { 
      sessionStorage.setItem('username', currentUser.username)
      sessionStorage.setItem('password', currentUser.password)
      sessionStorage.setItem('iduser', JSON.stringify(currentUser.iduser))
      this.router.navigate(['grouppage']) 
      } ,
      err => {
        this.router.navigate(['errorlogin'])
      }
    );
  }
  








}
