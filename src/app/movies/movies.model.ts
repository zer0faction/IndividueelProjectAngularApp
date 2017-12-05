export class Movie {
  private id: string;
  private title: string;
  private description: string;
  private posterUrl: string;
  private length: number;
  private releaseDate: string;
  private rating: string;

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
}
