import {Component, OnInit, Input} from '@angular/core';
import {Movie} from "../../movies.model";
import {User} from "../../../users/users.model";
import {AuthService} from "../../../users/auth.service";

@Component({
  selector: 'app-movies-single',
  templateUrl: './movies-single.component.html',
  styleUrls: ['./movies-single.component.css']
})
export class MoviesSingleComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: string;

  movieids:string[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.index = this.movie._id;
    if(this.authService.getWatchedMovies()!=null){
      this.movieids = this.authService.getWatchedMovies()
    }
  }

  onAddToUser(){
    this.authService.addFilmToUser(this.movie._id);
  }

  isWatched(){
    if(this.authService.getWatchedMovies()!=null){
      if(this.movieids.includes(this.movie._id)){
        return true;
      }else{
        return false;
      }
    } else {
      return true;
    }
  }
}
