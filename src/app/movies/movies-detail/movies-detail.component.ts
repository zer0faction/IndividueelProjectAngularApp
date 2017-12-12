import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Movie} from "../movies.model";
import {AuthService} from "../../users/auth.service";

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie: Movie = new Movie();
  id: string;

  constructor(private authService: AuthService,private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

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

  //
  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDelete(){
    this.movieService.deleteMovie(this.id);
    this.router.navigate(['/movies']);
  }

  isAuth(){
    if(this.authService.isAuthenticated() == true){
      return true;
    } else {
      return false;
    }
  }
}
