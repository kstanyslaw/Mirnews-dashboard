import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { News } from 'src/app/models/news';
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
    var title = {
      en: this.newsForm.value.title_en,
      ru: this.newsForm.value.title_ru
    };
    var article = {
      en: this.newsForm.value.article_en,
      ru: this.newsForm.value.article_ru
    };
    var preview = {
      en: null,
      ru: null,
      img: null
    };

    var news = new News(
      null,
      this.newsForm.value.author,
      this.newsForm.value.date,
      title,
      article,
      preview
    )
    this.dashboardService.addNews(news).subscribe();
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
