import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { News } from 'src/app/models/news';
import { DashboardService } from '../dashboard.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  selectedCategory = 'Choose a category';

  categories: Category[];

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
      en: 'test',
      ru: 'Тест',
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

  getBlockquotes(article: string) {
    var html = document.createElement('html');
    html.innerHTML = article;
    var blockuotes = [];
    var blockuotesHTML = html.getElementsByTagName('blockquote');
    blockuotes[0] = article.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");
    for (let i = 1; i < blockuotesHTML.length + 1; i++) {
      blockuotes[i] = blockuotesHTML[i].innerText;      
    }
    return blockuotes;
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

    this.dashboardService.getCategoriesList().subscribe(
      data => ( this.categories = data )
    );
  }
}
