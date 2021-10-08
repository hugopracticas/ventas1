import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginRegistroMainComponent } from './login-registro-main/login-registro-main.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LoginRegistroMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginRegistroModule { }
