import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  isFormValid = false;
  areMovieAdded = false;

  constructor(private film: FilmService) { }

  ngOnInit(): void {
  }

  add(movie: any, signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      return;
    }
    this.addMovies(movie);

  }
  addMovies(sign: any) {
    console.log(sign.id, sign.img, sign.title, sign.desc)
    const movie = new Movies(sign.id, sign.img, sign.title, sign.desc)
    this.film.addMovie(movie)
  }

}
class Movies {
  id: number
  img: string;
  title: string;
  description: string;
  constructor(id: number, img: string, title: string, description: string) {
    this.img = img;
    this.id = id;
    this.title = title;
    this.description = description;
  }

  getId(): number { return this.id }
  getTitle(): string { return this.title }
  getDesc(): string { return this.description }
  getImg(): string { return this.img }


}
