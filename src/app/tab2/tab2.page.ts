import { Component } from '@angular/core';
import { MovieModel } from 'src/models/movie.model';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private localStorageService: LocalStorageService) {}

  public movies : Array<MovieModel> = [];

  ionViewWillEnter(){
    this.movies = this.localStorageService.getItem("myList");
    console.log(this.movies);
  }

}
