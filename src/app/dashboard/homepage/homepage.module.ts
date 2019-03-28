import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [HomepageComponent, NavbarComponent, JumbotronComponent, PopularComponent],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
