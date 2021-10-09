import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregProductoComponent } from './agreg-producto/agreg-producto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductoModule { }
