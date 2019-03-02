import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SingupComponent } from './auth/singup/singup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';
import { EditNewsComponent } from './dashboard/edit-news/edit-news.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'singup', pathMatch: 'full' },
      { path: 'singup', component: SingupComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: EditNewsComponent },
      { path: 'articles', component: ArticlesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
