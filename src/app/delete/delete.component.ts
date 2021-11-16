import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  movieId: number;
  foodName: string | null;

  constructor(private activeRout: ActivatedRoute, private film: FilmService, private route: Router) {
    this.movieId = parseInt(activeRout.snapshot.paramMap.get("id"));
    this.foodName = activeRout.snapshot.paramMap.get("fname");
    this.deleteDetails();
    this.route.navigate(['home']);


  }

  deleteDetails() {

    this.film.movie.forEach((item, index) => {
      if (item.id === this.movieId) this.film.movie.splice(index, 1);
    });
  }

  ngOnInit(): void {
  }

}
