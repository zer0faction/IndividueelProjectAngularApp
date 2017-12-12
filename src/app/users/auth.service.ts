import {Http} from "@angular/http";
import {User} from './users.model';
import {Injectable} from "@angular/core";
import {Movie} from "../movies/movies.model";
import {MoviesService} from "../movies/movies.service";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  userChanged = new Subject<User>();
  token: string = null;
  user: User = new User();
  movies: Movie[] = [];
  movie: Movie = new Movie();

  constructor(private http: Http,private moviesService: MoviesService,private router:Router){}

  signupUser(user: User){
    this.http.post('https://movies-databas3.herokuapp.com/users/',user)
      .toPromise()
      .catch(error => {
        return this.handleError(error);
      })
  }

  signinUser(user: User){
    this.http.post('https://movies-databas3.herokuapp.com/users/auth',user)
      .toPromise()
      .then(response => {
        if(response.status = 200){
          this.token = '';
          this.user = response.json() as User;
          console.log(this.user.username)
          console.log(this.user.password)
          this.router.navigate(['/users/account']);
        } else {
          this.token = null;
        }
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  getUser() {
    return this.http.get('https://movies-databas3.herokuapp.com/users/'+this.user._id)
      .toPromise()
      .then(response => {
        return response.json() as User;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  updateUser(){
    this.http.put('https://movies-databas3.herokuapp.com/users/'+this.user._id,this.user)
      .toPromise()
      .then(response => {
        this.userChanged.next(this.user)
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  addFilmToUser(id: string){
    this.user.watchedmovies.push(id);
    this.updateUser();
  }

  deleteFilmFromUser(id: string){
    for (var i=this.user.watchedmovies.length-1; i>=0; i--) {
      if (this.user.watchedmovies[i] === id) {
        this.user.watchedmovies.splice(i, 1);
      }
    }
    this.updateUser()
  }

  getWatchedMovies(){
    // console.log('bekeken films: '+this.user.watchedmovies);
    return this.user.watchedmovies;
  }

  //
  signoutUser(){
    this.token = null;
    this.user = null;
    this.user.watchedmovies = [];
  }

  isAuthenticated(){
    return this.token != null;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

