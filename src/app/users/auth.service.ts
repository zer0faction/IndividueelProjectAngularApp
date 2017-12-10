import {Http} from "@angular/http";
import {User} from './users.model';
import {Injectable} from "@angular/core";
import {Movie} from "../movies/movies.model";
import {MoviesService} from "../movies/movies.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthService {
  token: string = null;
  user: User = new User();
  movies: Movie[] = [];
  movie: Movie = new Movie();

  constructor(private http: Http,private moviesService: MoviesService){}

  signupUser(user: User){
    this.http.post('http://localhost:4200/users/',user)
      .toPromise()
      .catch(error => {
        return this.handleError(error);
      })
  }

  signinUser(user: User){
    this.http.post('http://localhost:4200/users/auth',user)
      .toPromise()
      .then(response => {
        if(response.status = 200){
          this.token = '';
          this.user = response.json() as User;
          console.log(this.user.username)
          console.log(this.user.password)
        } else {
          this.token = null;
        }
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  getUser() {
    return this.http.get('http://localhost:4200/users/'+this.user._id)
      .toPromise()
      .then(response => {
        return response.json() as User;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }


  getWatchedMovies(){
    // console.log('bekeken films: '+this.user.watchedmovies);
    return this.user.watchedmovies;
  }

  //
  signoutUser(){
    this.token = null;
    this.user = null;
  }

  isAuthenticated(){
    return this.token != null;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

