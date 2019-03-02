import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { ArticleScrollspyComponent } from './article-scrollspy/article-scrollspy.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ArticlesComponent,
    EditNewsComponent,
    ArticleScrollspyComponent
  ],
  providers: [
    DashboardService
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
