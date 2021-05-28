import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Inventory App';
  isLoggedIn:boolean=false;

  constructor(private ss: SecurityService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn=this.ss.isLoggedIn();
    interval(1000)
    .subscribe(() => {
      this.isLoggedIn=this.ss.isLoggedIn();
    });
  }

  logout(){
    this.ss.logout() .subscribe(() => {
      this.ss.removeToken();
      this.isLoggedIn=false;
      this.router.navigate(['/login']);
    });
  }
}
