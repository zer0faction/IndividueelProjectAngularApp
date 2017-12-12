import { Component, OnInit, OnDestroy } from '@angular/core';
import {Movie} from "../movies.model";
import {MoviesService} from "../movies.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../users/auth.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription: Subscription;

  constructor(private authService: AuthService,private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.moviesService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.moviesService.getMovies()
            .then(res => {
              this.movies = res;
            });
        }
      );
    this.moviesService.getMovies()
      .then(movies => this.movies = movies)
      .catch(error => console.log(error));
  }

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  isAuth(){
    if(this.authService.isAuthenticated() == true){
      return true;
    } else {
      return false;
    }
  }
}


