import {Movie} from './movies.model';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MoviesService {
  moviesChanged = new Subject<Movie[]>();
  private movies: Movie[];
  //= [
  //  new Movie('1','eerste film','Leuke film','',100),
  //  new Movie('2','Eerste film','Leuke film','',100)
  //]

  constructor(private http: Http){}

  getMovies(){
    return this.http.get('http://localhost:4200/movies/')
      .toPromise()
      .then(response => {
        this.movies = response.json() as Movie[];
        return response.json() as Movie[];
      })
      .catch(error => {
        console.log(error);
      })
  }
}
