import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../movies/movies.model";
import {AuthService} from "../../auth.service";
import {MoviesService} from "../../../movies/movies.service";
import {User} from "../../users.model";

@Component({
  selector: 'app-movieswatched-list',
  templateUrl: './movieswatched-list.component.html',
  styleUrls: ['./movieswatched-list.component.css']
})
export class MovieswatchedListComponent implements OnInit {
  movies: Movie[] = [];
  movieids: string[];

  constructor(private moviesService: MoviesService,private authService: AuthService) {
  }

  ngOnInit() {
    this.movieids = this.authService.getWatchedMovies()
    this.onInit()
  }

  onInit(){
    for(let string of this.movieids){
      console.log('Strings: '+string)
      this.moviesService.getMovie(string)
        .then(movie => {
          console.log('Film in de let oninit: '+movie.name)
          this.movies.push(movie);
        })
    }
    console.log(this.movies.length+' aantal films')
  }
}
