import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  userName: string = ''

  ngOnInit(): void {
    const userNameLocal = localStorage.getItem('username');

    if(userNameLocal){
      this.userName = userNameLocal.toString();
    }
  }
}

