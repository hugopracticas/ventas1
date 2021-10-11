import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';



@NgModule({
  declarations: [
    ListaProductosComponent,
    ListaAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
