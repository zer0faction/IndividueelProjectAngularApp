import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";
import {Input} from "@angular/compiler/src/core";
import {Movie} from "./movies.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  //@Input() movie: Movie;
  //@Input() index: string;

  ngOnInit() {
    //this.index = this.movie._id;
  }

}
