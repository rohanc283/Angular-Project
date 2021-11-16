import { ClassField } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isFormValid = false;
  areMovieAdded = false;
  movieId: number;
  movieTitle: string;
  movieImg: string;
  movieDesc: string;

  constructor(private activeRout: ActivatedRoute, private film: FilmService, private route: Router) {
    this.movieId = parseInt(activeRout.snapshot.paramMap.get("id"));
    this.getDetails();
  }
  getDetails() {

    this.film.movie.find((item, index) => {
      if (item.id === this.movieId) {
        this.movieTitle = item.title;
        this.movieImg = item.img;
        this.movieDesc = item.description;
        console.log(this.movieTitle, this.movieImg, this.movieDesc)
      }
    });
  }



  ngOnInit(): void {
  }
  add(movie: any, signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      return;
    }
    this.addMovie(movie.title, movie.img, movie.desc
    )
  }

  addMovie(title, img, desc) {
    this.film.movie.find((item, index) => {
      if (item.id === this.movieId) {
        item.title = title;
        item.img = img;
        item.description = desc;
        console.log(item);
        this.route.navigate(['home'])
      }
    });
  }


}
