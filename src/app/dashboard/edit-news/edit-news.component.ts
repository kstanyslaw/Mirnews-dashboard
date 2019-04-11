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

  x:string = '<p>Столицу Казахстана официально переименовали в Нур-Султан.</p> <blockquote>На этой неделе с таким предложением выступил президент Касым-Жомарт Токаев после церемонии принесения присяги на посту нового главы государства.</blockquote> <p>Инициативу главы государства тут же поддержал казахстанские законодатели. На официальном сайте размещен указ главы республики. Согласно тексту документа нововведения вступают в силу с момента публикации - 23 марта. Помимо этого президент внес изменения в Конституцию Казахстана. Накануне против переименования столицы вышло несколько десятков человек по всей стране: более полусотни митингующих были задержаны в Астане и около двух десятков в Алмате. Назарбаев объявил об отставке 19 марта, полномочия он передал спикеру сената парламента. Очередные выборы запланированы на 2020 год.</p>'

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
    var blockquotes = [];
    var blockquotesHTML = html.getElementsByTagName('blockquote');
    for (let i = 0; i < blockquotesHTML.length; i++) {
      blockquotes[i] = blockquotesHTML[i].innerText;      
    }
    blockquotes.unshift(html.innerText.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…"));
    return blockquotes;
  }

  ngOnInit() {
    console.log(this.getBlockquotes(this.x));
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
