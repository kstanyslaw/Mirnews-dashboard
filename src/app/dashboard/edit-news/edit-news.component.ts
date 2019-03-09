import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { News } from 'src/app/models/news';
import { Body } from 'src/app/models/single-language-news-body';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  newsForm: FormGroup;

  articleEditLang = 'en';

  addNewsStep = 1;

  constructor(private dashboardService: DashboardService) { }

  onSubmit() {
    var article_en = new Body(
      'en',
      this.newsForm.value.title_en,
      this.newsForm.value.article_en
    );
      
    var article_ru = new Body(
      'ru',
      this.newsForm.value.title_ru,
      this.newsForm.value.article_ru
    );
        
    var news = new News(
      null,
      this.newsForm.value.author,
      this.newsForm.value.date,
      [
        article_en,
        article_ru
      ],
      null

      // 'test',
      // new Date(),
      // [
      //   {
      //     language: 'ru',
      //     title: 'title_ru',
      //     article: 'article_ru'
      //   },
      //   {
      //     language: 'en',
      //     title: 'title_en',
      //     article: 'article_en'
      //   }
      // ],
      // null
    )
    this.dashboardService.addNews(news).subscribe(
      // data => console.log(data)
    );
  }

  ngOnInit() {
    this.newsForm = new FormGroup({
      author: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      title_en: new FormControl(null, Validators.required),
      title_ru: new FormControl(null, Validators.required),
      article_en: new FormControl(null, Validators.required),
      article_ru: new FormControl(null, Validators.required),
    })
  }

}
