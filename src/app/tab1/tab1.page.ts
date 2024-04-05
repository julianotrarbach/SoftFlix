import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MovieModel } from 'src/models/movie.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apiService: ApiService) { }

  public selectedSegment : string = "0";
  public movies: Array<MovieModel> = [];
  public series: Array<MovieModel> = [];
  public episodes: Array<MovieModel> = [];


  searchMovies(event: any) {
    this.apiService.search(event.target.value).subscribe(
      (data) => {

        this.movies = data.Search.filter(m => m.Type === 'movie');
        this.series = data.Search.filter(m => m.Type === 'series');
        this.episodes = data.Search.filter(m => m.Type === 'episodes');

      },
      (erro) => {
        console.error('Sorry, we had a problem. Try again in few minutes!', erro);
      }
    );
  }



}
