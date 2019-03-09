import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-scrollspy',
  templateUrl: './article-scrollspy.component.html',
  styleUrls: ['./article-scrollspy.component.css']
})
export class ArticleScrollspyComponent implements OnInit {

  articlePreviewLang = 'en';

  @Input() article_en: string;
  @Input() article_ru: string;

  constructor() { }

  ngOnInit() {
  }

}
