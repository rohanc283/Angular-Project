import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FilmService } from "../film.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: boolean = false;
  hero;
  constructor(public film: FilmService, private router: Router) {
    this.user = this.film.isauth;
    // console.log(this.user)
  }
  reload() {
    this.user = this.film.isauth;
    console.log(this.user)
    // if (this.router.url == 'login') { this.login = true }

  }
  ngOnInit(): void {
    this.user = this.film.isauth;


  }

}
