import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {
  constructor(private route: Router){}
logout() {
  localStorage.clear();
  this.route.navigateByUrl("/");
}
}
