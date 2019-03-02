import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getNews().subscribe(
      data => console.log(data),
    );
  }

}
