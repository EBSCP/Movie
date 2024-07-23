import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isOpen = false;
  movie: any;
  posterUrl: string | undefined;

  constructor(private movieService: MovieService) { }  // MovieService ile movieService

  toggleInfoBox() {
    this.isOpen = !this.isOpen;
  }

  searchMovie(title: string) {
    this.movieService.getMovie(title).subscribe((data: any) => {  // MovieService yerine movieService
      this.movie = data;
      this.posterUrl = `http://img.omdbapi.com/?apikey=6d49d9f1&i=${this.movie.imdbID}`;
    });
  }
}
