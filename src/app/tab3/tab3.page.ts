import { Component } from '@angular/core';
import { MovieModel } from 'src/models/movie.model';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private localStorageService: LocalStorageService) {}

  public movies : Array<MovieModel> = [];

  ionViewWillEnter(){
    this.movies = this.localStorageService.getItem("watchedList");
    console.log(this.movies);
  }

}
