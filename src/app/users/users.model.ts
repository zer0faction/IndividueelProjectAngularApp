import {Movie} from "../movies/movies.model";
export class User{
  private id: string;
  private _username: string;
  private _password: string;
  private _watchedmovies: string[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get _id(): string {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get username(): string {
    return this._username;
  }

  public set username(n: string) {
    this._username = n;
  }

  public get password(): string {
    return this._password;
  }

  public set password(n: string) {
    this._password = n;
  }

  public get watchedmovies(): string[] {
    return this._watchedmovies;
  }

  public set watchedmovies(i: string[]) {
    this._watchedmovies = i;
  }
}
