import {Movie} from './movies.model';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MoviesService {
  moviesChanged = new Subject<Movie[]>();
  private movies: Movie[];
  private movie: Movie;

  constructor(private http: Http){}

  getMovies(){
    return this.http.get('https://movies-databas3.herokuapp.com/movies/')
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
    return this.http.get('https://movies-databas3.herokuapp.com/movies/'+id)
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
    this.http.post('https://movies-databas3.herokuapp.com/movies/',movie)
      .toPromise()
      .then(response => {
        this.movie = response.json();
        this.moviesChanged.next(this.movies.slice());
        console.log(this.movie._id+'ID!!')
        this.http.post('https://movies3-neo4j.herokuapp.com/movies/add/'+this.movie._id,movie)
          .toPromise()
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            return this.handleError(error);
          })
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  updateMovie(id: string, movie: Movie) {
    this.http.put('https://movies-databas3.herokuapp.com/movies/'+id,movie)
      .toPromise()
      .then(response => {
        console.log(movie._id);
        this.moviesChanged.next(this.movies.slice());
        this.http.post('https://movies3-neo4j.herokuapp.com/movies/add/'+id,movie)
          .toPromise()
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            return this.handleError(error);
          })
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  deleteMovie(id: string) {
    this.http.delete('https://movies-databas3.herokuapp.com/movies/'+id)
      .toPromise()
      .then(response => {
        this.moviesChanged.next(this.movies.slice());
      })
      .catch(error => {
        return this.handleError(error);
      });

    this.http.delete('https://movies3-neo4j.herokuapp.com/movies/add/'+id)
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
