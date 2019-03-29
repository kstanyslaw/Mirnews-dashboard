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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { DeleteNewsModalComponent } from './delete-news-modal/delete-news-modal.component';
import { HomepageModule } from './homepage/homepage.module';
import { NewscardPreviewComponent } from './edit-news/newscard-preview/newscard-preview.component';
import { RelatedPreviewComponent } from './edit-news/related-preview/related-preview.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ArticlesComponent,
    EditNewsComponent,
    ArticleScrollspyComponent,
    DeleteNewsModalComponent,
    NewscardPreviewComponent,
    RelatedPreviewComponent
  ],
  providers: [
    DashboardService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEditorModule,
    HomepageModule
  ]
})
export class DashboardModule { }
