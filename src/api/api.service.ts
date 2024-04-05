// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchModel } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=7a42b721'; 

  constructor(private http: HttpClient) {}

  search(title: string) {
    return this.http.get<SearchModel>(`${this.apiUrl}&s=${title}`);
  }
}
