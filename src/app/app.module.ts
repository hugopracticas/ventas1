import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavLoginComponent } from './login-registro/nav-login/nav-login.component';
import { NabbarComponent } from './nabbar/nabbar.component';
import { HomeModule } from './home/home.module';
import { ProductoModule } from './producto/producto.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLoginComponent,
    NabbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    ProductoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
