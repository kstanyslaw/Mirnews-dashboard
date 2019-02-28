import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ArticlesComponent
  ],
  providers: [
    DashboardService
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
