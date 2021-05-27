import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory App';
  isLoggedIn:boolean = this.ss.isLoggedIn();

  constructor(private ss: SecurityService, private router: Router) {}

  logout(){
    this.ss.logout() .subscribe(() => {
      this.ss.removeToken();
      this.router.navigate(['/login']);
    });
  }
}
