import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Movie} from "../movies.model";

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie = new Movie();
  id: string;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.movieService.getMovie(this.id)
            .then(movie => this.movie = movie)
            .catch(error => console.log(error));
        }
      );
  }
}
