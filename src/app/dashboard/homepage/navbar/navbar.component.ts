import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public navbarService: NavbarService) { }

  getStyle(category: any) {
    if (!category.navColor) {
      return '#6c757d';
    }
    return category.navColor;
  }

  translateCategory(category) {
    const lang = 'en';
    return category[lang];
  }

  getCountryFlag(language: string) {
    if (language === 'en') {
      language = 'us';
    }
    return ('flag-icon-' + language);
  }

  ngOnInit() {
    this.navbarService.getCategories().subscribe();
  }


}
