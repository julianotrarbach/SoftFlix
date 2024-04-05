import { Component } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { MovieModel } from 'src/models/movie.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //constructor(private apiService: ApiService) { }

  public movies: Array<MovieModel> = [
    {
      imdbID: "",
      Title: "You Are So Not Invited to My Bat Mitzvah",
      Year: "2023",
      Type: "movies",
      Poster: "https://m.media-amazon.com/images/M/MV5BZWQ3ZDQ3MTYtZWUyOS00YmFhLTllOWItNzNmNjE0ZDI5YWE5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
    }];
  public series: Array<MovieModel> = [];
  public episodes: Array<MovieModel> = [];
  public watched: Array<MovieModel> = [];
  public myList: Array<MovieModel> = [];

  searchMovies(event: any) {
    // this.apiService.search(event.target.value).subscribe(
    //   (data) => {

    //     this.movies = data.Search.filter(m => m.Type === 'movie');
    //     this.series = data.Search.filter(m => m.Type === 'series');
    //     this.episodes = data.Search.filter(m => m.Type === 'episodes');

    //   },
    //   (erro) => {
    //     console.error('Sorry, we had a problem. Try again in few minutes!', erro);
    //   }
    // );
  }

  addWatched(data: any): void {
    this.watched.push(data);
  }
  addMyList(data: any): void {
    this.myList.push(data);
  }

}
