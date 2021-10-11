import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre!: string;
  id!: string;
  bienvenido!: string

  constructor( private sistemaService: SistemaService ) { }

  ngOnInit(): void {
  }

  getNombre( usuario: string ){
    this.nombre = usuario;
  }

  getId( id: string ){
    this.id = id
  }

  validarUser(): boolean{
    console.log(`${this.nombre} ${this.id} `);
    const existe = this.sistemaService.administradores.some( admin => {
        return admin.identificador === this.id;
    } )
    if( existe ){
      this.bienvenido = "Adelante"
      return existe;
    }else{
      this.bienvenido =" Tu password o email son incorrectos"
      return false;
    }
  }
}
