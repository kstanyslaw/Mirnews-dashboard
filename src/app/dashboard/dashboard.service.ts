import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { News } from '../models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  deleteNewsModal = {
    isShow: false,
    articleToDelete: null
  }

  news: News[];

  constructor(private httpClient: HttpClient) { }

  addNews(news: News) {
    console.log(news);
    const httpOptins = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorisation': 'test-token'
      })
    }
    return this.httpClient.post<News>('http://localhost:3000/news',news, httpOptins);
  }

  deleteNews(id: string): Observable<{}> {
    const url = 'http://localhost:3000/news/' + id;
    console.log(url);
    const httpOptins = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.delete(url, httpOptins)
  }

  getNews() {
    const httpOptins = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<Response>('http://localhost:3000/news', httpOptins).pipe(
      tap(
        data => this.news = data.docs
      )
    );
  }
}

class Response {
  constructor(
    public docs: Array<News>,
    public total: number,
    public limit: number,
    public page: number,
    public pages: number
  ) {}
}
