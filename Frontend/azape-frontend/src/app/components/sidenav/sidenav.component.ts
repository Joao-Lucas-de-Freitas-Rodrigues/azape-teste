import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userNameLocal = localStorage.getItem('username');
    if (userNameLocal) {
      this.userName = userNameLocal.toString();
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/das']);
  }
}