import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';
import { Producto } from '../../interfaces/sistema.interface';

@Component({
  selector: 'app-agreg-producto',
  templateUrl: './agreg-producto.component.html',
  styleUrls: ['./agreg-producto.component.css']
})
export class AgregProductoComponent implements OnInit {

  constructor( private sistemaService: SistemaService ) { }

  ngOnInit(): void {
  }

  producto: Producto = {
    nombre: '',
    marca: '',
    categoria: '',
    costo: 0,
    imagen: '',
    descripcion: '',
    identificador: ''
  }

  agregarProducto(){
    this.sistemaService.agregarProducto( this.producto );
    console.log( this.producto );
    this.producto = {
      nombre: '',
      marca: '',
      categoria: '',
      costo: 0,
      imagen: '',
      descripcion: '',
      identificador: ''
    }
  }

}
