import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  onDeleteNews(articleToDelete: string) {
    this.dashboardService.deleteNewsModal.isShow = true;
    this.dashboardService.deleteNewsModal.articleToDelete = articleToDelete;
  }

  ngOnInit() {
    this.dashboardService.getNews().subscribe(
      data => console.log(data),
    );
  }

}
