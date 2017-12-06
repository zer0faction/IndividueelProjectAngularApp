export class Movie {
  private id: string;
  private _title: string;
  private _description: string;
  private _posterUrl: string;
  private _length: number;
  private _releaseDate: string;
  private _rating: string;

  private directors: string[];
  private writers: string[];
  private genres: string[];

  // constructor(_id: string,title: string,description: string,posterUrl: string,length: number,releaseDate: string, rating: string,
  //             directors: string[],writers:string[],genres: string[]){
  //   this.id = _id;
  //   this.title = title;
  //   this.description = description;
  //   this.posterUrl = posterUrl;
  //   this.length = length;
  //   this.releaseDate = releaseDate;
  //   this.rating = rating;
  //   this.directors = directors;
  //   this.writers = writers;
  //   this.genres = genres;
  // }

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get _id(): string {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get title(): string {
    return this._title;
  }

  public set title (n: string) {
    this._title = n;
  }

  public get description(): string {
    return this._description;
  }

  public set description (n: string) {
    this._description = n;
  }

  public get posterUrl(): string {
    return this._posterUrl;
  }

  public set posterUrl (n: string) {
    this._posterUrl = n;
  }

  public get releaseDate(): string {
    return this._releaseDate;
  }

  public set releaseDate (n: string) {
    this._releaseDate = n;
  }

  public get rating(): string {
    return this._rating;
  }

  public set rating (n: string) {
    this._rating = n;
  }

  public get length(): number {
    return this._length;
  }

  public set length (n: number) {
    this._length = n;
  }
}

