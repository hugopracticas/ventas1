import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  exports: [
    NavLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginRegistroModule { 

}
