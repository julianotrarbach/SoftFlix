import { Component, Input } from '@angular/core';
import { MovieModel } from 'src/models/movie.model';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() movies?: Array<MovieModel>;

  constructor(private localStorageService: LocalStorageService) { }

  addWatched(data: any): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("watchedList");

    const indexToRemove = list?.findIndex(m => m.imdbID === data.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    } else {
      if (!list) { list = [] };
      list.push(data);
    }

    this.localStorageService.setItem("watchedList", list);
  }
  addMyList(data: any): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("myList");

    const indexToRemove = list?.findIndex(m => m.imdbID === data.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    } else {
      if (!list) { list = [] };
      list.push(data);
    }

    this.localStorageService.setItem("myList", list);
  }

}
