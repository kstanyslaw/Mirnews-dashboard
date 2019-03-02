import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  news: News[];

  constructor(private httpClient: HttpClient) { }

  getNews() {
    const httpOptins = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<News[]>('https://mirnews-backend.herokuapp.com/news', httpOptins).pipe(
      tap(
        data => this.news = data
      )
    );
  }
}
