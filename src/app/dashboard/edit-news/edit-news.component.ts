import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor() { }

  onSubmit() {
    console.log(this.newsForm.value)
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
