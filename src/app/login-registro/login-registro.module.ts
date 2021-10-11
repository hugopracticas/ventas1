import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // NavLoginComponent
  ]
})
export class LoginRegistroModule { 

}
