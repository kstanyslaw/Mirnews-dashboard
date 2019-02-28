import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, SingupComponent, LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
