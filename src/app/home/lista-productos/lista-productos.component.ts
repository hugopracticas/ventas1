import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor( private sistemaService: SistemaService) { }

  ngOnInit(): void {
  }

  get productos(){
    console.log('Productos');
    console.log(this.sistemaService.productos);
    return this.sistemaService.productos;
  }

}
