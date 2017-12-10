import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../movies/movies.model";

@Component({
  selector: 'app-movieswatched-single',
  templateUrl: './movieswatched-single.component.html',
  styleUrls: ['./movieswatched-single.component.css']
})
export class MovieswatchedSingleComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
    this.index = this.movie._id;
  }

}
