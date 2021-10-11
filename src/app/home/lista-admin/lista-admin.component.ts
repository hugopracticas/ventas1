import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {

  constructor( private sistemaService: SistemaService ) { }

  ngOnInit(): void {
  }

  get administradores(){
    console.log('Administradores');
    console.log(this.sistemaService.administradores);
    return this.sistemaService.administradores;
  }

}
