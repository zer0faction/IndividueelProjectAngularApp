import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../movies.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MoviesService} from "../movies.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {
  id: string;
  editMode = false;
  movieForm: FormGroup;
  movie: Movie;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          console.log('TEST');
        }
      );
  }

  private initForm(){
  let editMovie = new Movie()
  const directors = new FormArray([]);
  const writers = new FormArray([]);
  const genres = new FormArray([]);

  if (this.editMode){
    console.log('EDIT TEST');
    this.movieService.getMovie(this.id)
      .then(movie => {
        editMovie = movie;

        if(movie['directors']){
          for(const director of movie.directors){
            directors.push(
              new FormGroup({
                'name': new FormControl(director.name, Validators.required)
              })
            );
          }
        }

        if(movie['writers']){
          for(const writer of movie.writers){
            writers.push(
              new FormGroup({
                'name': new FormControl(writer.name, Validators.required)
              })
            );
          }
        }

        if(movie['genres']){
          for(const genre of movie.genres){
            genres.push(
              new FormGroup({
                'genre': new FormControl(genre.genre, Validators.required)
              })
            );
          }
        }

        this.movieForm = new FormGroup({
          'title': new FormControl(editMovie.title, Validators.required),
          'description': new FormControl(editMovie.description, Validators.required),
          'posterUrl': new FormControl(editMovie.posterUrl, Validators.required),
          'directors': directors,
          'writers': writers,
          'rating': new FormControl(editMovie.rating, Validators.required),
          'releaseDate': new FormControl(editMovie.releaseDate, Validators.required),
          'length': new FormControl(editMovie.length, Validators.required),
          'genres': genres
        });
        console.log(editMovie.title);
      })
      .catch(error => console.log(error));
    }
    this.movieForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'posterUrl': new FormControl('', Validators.required),
      'directors': new FormArray([]),
      'writers': new FormArray([]),
      'rating': new FormControl('', Validators.required),
      'releaseDate': new FormControl('', Validators.required),
      'length': new FormControl('', Validators.required),
      'genres': new FormArray([])
    })
  }

  onSave(){
    if(this.editMode){
      this.movieService.updateMovie(this.id,this.movieForm.value);
    }else{
      this.movieService.addMovie(this.movieForm.value);
      this.movieService.getMovies()
        .then(movies => {
          this.movieService.moviesChanged.next(movies.slice());
        });
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  onDeleteDirector(i: number){
    (<FormArray>this.movieForm.get('directors')).removeAt(i);
  }

  onAddDirector(){
    (<FormArray>this.movieForm.get('directors')).push(
      new FormGroup({
        'name': new FormControl('',Validators.required)
      })
    );
  }

  onDeleteWriter(i: number){
    (<FormArray>this.movieForm.get('writers')).removeAt(i);
  }

  onAddWriter(){
    (<FormArray>this.movieForm.get('writers')).push(
      new FormGroup({
        'name': new FormControl('',Validators.required)
      })
    );
  }

  onDeleteGenre(i: number){
    (<FormArray>this.movieForm.get('genres')).removeAt(i);
  }

  onAddGenre(){
    (<FormArray>this.movieForm.get('genres')).push(
      new FormGroup({
        'genre': new FormControl('',Validators.required)
      })
    );
  }



}
