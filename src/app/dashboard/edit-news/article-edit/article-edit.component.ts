import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  @Input() newsForm: FormGroup;

  articleEditLang = 'en';

  constructor() { }

  ngOnInit() {
  }

}
