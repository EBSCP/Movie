import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=6d49d9f1';

  constructor(private http: HttpClient) { }

  getMovies(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&s=${title}`);
  }

  getMovie(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&t=${title}`);
  }
}
