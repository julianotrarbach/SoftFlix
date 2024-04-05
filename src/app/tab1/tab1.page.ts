import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MovieModel } from 'src/models/movie.model';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) { }

  public selectedSegment: string = "0";
  public movies: Array<MovieModel> = [];
  public series: Array<MovieModel> = [];
  public episodes: Array<MovieModel> = [];


  searchMovies(event: any) {
    this.apiService.search(event.target.value).subscribe(
      (data) => {

        let myList: Array<MovieModel> = this.localStorageService.getItem("myList");
        let watchedList: Array<MovieModel> = this.localStorageService.getItem("watchedList");

        data.Search?.forEach(movie => {          
          movie.IsInMyList = myList && myList.findIndex(m => m.imdbID === movie.imdbID) !== -1;
          movie.IsWatched = watchedList && watchedList.findIndex(m => m.imdbID === movie.imdbID) !== -1;
        });

        this.movies = data?.Search?.filter(m => m.Type === 'movie');
        this.series = data?.Search?.filter(m => m.Type === 'series');
        this.episodes = data?.Search?.filter(m => m.Type === 'episodes');



      },
      (erro) => {
        console.error('Sorry, we had a problem. Try again in few minutes!', erro);
      }
    );
  }



}
