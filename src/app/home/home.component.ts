import { Component, OnInit } from '@angular/core';
import { FilmService } from "../film.service";
import { Router } from "@angular/router";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  query = '';
  user: boolean = false;
  constructor(private film: FilmService, private router: Router) {
    let headerObj = new HeaderComponent(film, router);
    headerObj.reload();
    this.user = this.film.isauth;
    this.getMovies();
  }

  getMovies() {
    console.log("object")
    this.film.movie.forEach(movie => this.movies.push(movie));
    console.log(this.movies);
  }

  ngOnInit(): void {
  }

}

class Movies {
  img: string;
  title: string;
  description: string;
  constructor(img: string, title: string, description: string) {
    this.img = img;
    this.title = title;
    this.description = description;
  }
}
