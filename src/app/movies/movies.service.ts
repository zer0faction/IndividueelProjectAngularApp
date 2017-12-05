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
        return this.handleError(error);
      });
  }

  getMovie(id: string) {
    return this.http.get('http://localhost:4200/movies/'+id)
      .toPromise()
      .then(response => {
        return response.json() as Movie;
      })
      .catch(error => {
        console.log('quack');
        return this.handleError(error);
      });
  }

  addMovie(movie: Movie) {
    this.http.post('http://localhost:4200/movies/',movie)
      .toPromise()
      .then(response => {
        this.moviesChanged.next(this.movies.slice());
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  updateMovie(id: string, movie: Movie) {
    this.http.put('http://localhost:4200/movies/'+id,movie)
      .toPromise()
      .then(response => {
        this.moviesChanged.next(this.movies.slice());
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  deleteMovie(id: string) {
    this.http.delete('http://localhost:4200/movies/'+id)
      .toPromise()
      .then(response => {
        this.moviesChanged.next(this.movies.slice());
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
