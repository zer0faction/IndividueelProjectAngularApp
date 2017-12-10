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
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { NewAccountComponent } from './users/new-account/new-account.component';
import { AccountComponent } from './users/account/account.component';
import {AuthService} from "./users/auth.service";
import { MovieswatchedListComponent } from './users/account/movieswatched-list/movieswatched-list.component';
import { MovieswatchedSingleComponent } from './users/account/movieswatched-list/movieswatched-single/movieswatched-single.component';
import {MoviesService} from "./movies/movies.service";

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: [
    {path: '', component: MoviesListComponent},
    {path: 'new', component: MoviesEditComponent},
    {path: ':id', component: MoviesDetailComponent},
    {path: ':id/edit', component: MoviesEditComponent}
  ]},
  { path: 'users',component: UsersComponent, children: [
    { path: 'account',component: AccountComponent},
    { path: 'login',component: LoginComponent},
    { path: 'new',component: NewAccountComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    MoviesSingleComponent,
    MoviesEditComponent,
    UsersComponent,
    LoginComponent,
    NewAccountComponent,
    AccountComponent,
    MovieswatchedListComponent,
    MovieswatchedSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
