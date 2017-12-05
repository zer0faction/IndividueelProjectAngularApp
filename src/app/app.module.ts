import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { HttpModule } from '@angular/http';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesSingleComponent } from './movies/movies-list/movies-single/movies-single.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: [
    {path: '', component: MoviesListComponent},
    {path: ':id', component: MoviesDetailComponent}
    //{path: ':id/edit', component: }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
