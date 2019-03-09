import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-delete-news-modal',
  templateUrl: './delete-news-modal.component.html',
  styleUrls: ['./delete-news-modal.component.css']
})
export class DeleteNewsModalComponent implements OnInit, OnDestroy{

  
  constructor(private dashboardService: DashboardService) { }
  
  isShow() {
    return this.dashboardService.deleteNewsModal.isShow;
  }

  closeModal() {
    this.dashboardService.deleteNewsModal.isShow = false;
    this.ngOnDestroy();
  }

  onConfirm() {
    console.log(this.dashboardService.deleteNewsModal.articleToDelete);
    this.dashboardService.deleteNews(this.dashboardService.deleteNewsModal.articleToDelete).subscribe();
    window.location.reload();
    this.closeModal();
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
