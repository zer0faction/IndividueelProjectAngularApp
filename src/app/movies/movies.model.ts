export class Movie {
  private id: string;
  private title: string;
  private description: string;
  private posterUrl: string;
  private length: number;

  constructor(id: string,title: string,description: string,posterUrl: string,length: number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.posterUrl = posterUrl;
    this.length = length;
  }
}
