import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MovieModel } from 'src/models/movie.model';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() movies?: Array<MovieModel>;



  constructor(
    private localStorageService: LocalStorageService,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ionViewWillEnter() {
    let myList: Array<MovieModel> = this.localStorageService.getItem("myList");
    let watchedList: Array<MovieModel> = this.localStorageService.getItem("watchedList");

    this.movies?.forEach(movie => {
      movie.IsInMyList = myList && myList.findIndex(m => m.imdbID === movie.imdbID) !== -1;
      movie.IsWatched = watchedList && watchedList.findIndex(m => m.imdbID === movie.imdbID) !== -1;
    });


  }

  async sucessMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'success'
    });

    await toast.present();
  }

  addWatched(movie: MovieModel): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("watchedList");

    const indexToRemove = list?.findIndex(m => m.imdbID === movie.imdbID);
    if (indexToRemove == null || indexToRemove === -1) {
      if (!list) { list = [] };
      list.push(movie);
      movie.IsWatched = true;
      this.localStorageService.setItem("watchedList", list);
      this.sucessMessage("Done");
    }


  }

  delWatched(movie: MovieModel): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("watchedList");

    const indexToRemove = list?.findIndex(m => m.imdbID === movie.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
      movie.IsWatched = false;
      this.localStorageService.setItem("watchedList", list);
      this.sucessMessage("Done");
    }

  }

  async confirmMessageDeleteWatched(movie: MovieModel) {

    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Are you sure in remove this one of Watched list?',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.delWatched(movie);
          },
        },
        {
          text: 'Cancel',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }

  addMyList(movie: MovieModel): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("myList");

    const indexToRemove = list?.findIndex(m => m.imdbID === movie.imdbID);
    if (indexToRemove == null || indexToRemove === -1) {
      if (!list) { list = [] };
      list.push(movie);
      movie.IsInMyList = true;
      this.localStorageService.setItem("myList", list);
      this.sucessMessage("Done");
    }


  }

  delMyList(movie: MovieModel): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("myList");

    const indexToRemove = list?.findIndex(m => m.imdbID === movie.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
      movie.IsInMyList = false;
      this.localStorageService.setItem("myList", list);
      this.sucessMessage("Done");
    }


  }

  async confirmMessageDeleteMyList(movie: MovieModel) {

    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Are you sure in remove this one of My list?',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.delMyList(movie);
          },
        },
        {
          text: 'Cancel',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }





}
