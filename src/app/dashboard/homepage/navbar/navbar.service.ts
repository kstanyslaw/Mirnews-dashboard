import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  categories: Category[];

  constructor(private httpClient: HttpClient) {}

  getCategories() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const params = new HttpParams().set('component', 'navbar')
    return this.httpClient.get<Category[]>('http://localhost:3000/category', {headers: httpOptions, params: params}).pipe(
      tap(
        data => this.categories = data
      )
    )
  }
}
