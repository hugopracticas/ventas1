import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginRegistroModule } from './login-registro/login-registro.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    LoginRegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
