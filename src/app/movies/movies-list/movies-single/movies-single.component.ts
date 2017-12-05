import {Component, OnInit, Input} from '@angular/core';
import {Movie} from "../../movies.model";

@Component({
  selector: 'app-movies-single',
  templateUrl: './movies-single.component.html',
  styleUrls: ['./movies-single.component.css']
})
export class MoviesSingleComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
    this.index = this.movie._id;
  }
}
