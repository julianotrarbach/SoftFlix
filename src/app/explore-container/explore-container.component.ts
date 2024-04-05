import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertController: AlertController
  ) { }

  addWatched(data: any): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("watchedList");

    const indexToRemove = list?.findIndex(m => m.imdbID === data.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
      this.sucessMessage("Done");
    } else {
      if (!list) { list = [] };
      list.push(data);
      this.sucessMessage("Done");
    }

    this.localStorageService.setItem("watchedList", list);
  }
  addMyList(data: any): void {

    let list: Array<MovieModel> = this.localStorageService.getItem("myList");

    const indexToRemove = list?.findIndex(m => m.imdbID === data.imdbID);
    if (indexToRemove != null && indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
      this.sucessMessage("Done");
    } else {
      if (!list) { list = [] };
      list.push(data);
      this.sucessMessage("Done");
    }

    this.localStorageService.setItem("myList", list);
  }

  async sucessMessage(message: string) {
    const alert = await this.alertController.create({
      message: message
    });

    await alert.present();
  }

  async confirmMessageWatched(movie: MovieModel) {

    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Are you sure in remove this one of Watched list?',
      buttons: [
        {
          text: 'Sim',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.addWatched(movie);
          },
        },
        {
          text: 'Não',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }



}
