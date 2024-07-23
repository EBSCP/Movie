import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isOpen = false;
  movies: any[] = []; // Define an array to hold the movies
  movie: any;
  posterUrl: string | undefined;
  constructor(private movieService: MovieService) { }

  toggleInfoBox() {
    this.isOpen = !this.isOpen;
  }

  searchMovies(title: string) {
    this.movieService.getMovies(title).subscribe((data: any) => {
      this.movies = data.Search; // Set the movies array from the API response
    });
  }

  getPosterUrl(imdbID: string): string {
    return `http://img.omdbapi.com/?apikey=6d49d9f1&i=${imdbID}`;
  }

  searchMovie(title: string) {
    this.movieService.getMovie(title).subscribe((data: any) => {  // MovieService yerine movieService
      this.movie = data;
      this.posterUrl = `http://img.omdbapi.com/?apikey=6d49d9f1&i=${this.movie.imdbID}`;
    });
  }
}
