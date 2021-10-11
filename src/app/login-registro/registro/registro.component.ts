import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/interfaces/loginRegistro';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( private sistemaService: SistemaService ) { }

  ngOnInit(): void {
  }

  administrador: Administrador = {
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    fechaIngreso: '',
    salario: 0,
    identificador: ''
  }

  agregarAdministrador(){
    this.sistemaService.agregarAdministrador( this.administrador );
    console.log( this.administrador );
    this.administrador = {
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      fechaIngreso: '',
      salario: 0,
      identificador: ''
    }
  }


}
