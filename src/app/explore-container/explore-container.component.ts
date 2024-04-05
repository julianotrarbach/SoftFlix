import { Component, Input } from '@angular/core';
import { MovieModel } from 'src/models/movie.model';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() movies?: Array<MovieModel>;

}
