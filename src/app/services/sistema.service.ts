import { Injectable } from "@angular/core";
import { Producto } from '../interfaces/sistema.interface';

@Injectable()
export class SistemaService{
    constructor(){

    }

    private _productos: Producto[] = [
        {
            nombre: 'LenovoX-19',
            marca: 'Lenovo',
            categoria: 'Computo',
            costo: 19000,
            imagen: 'https://images.unsplash.com/photo-1605449591750-7bf5cc4f013f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
            descripcion: 'La mejor computadora para el regreso a clases, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'com12345'
        },
        {
            nombre: 'ThinkPad',
            marca: 'Lenovo',
            categoria: 'Computo',
            costo: 25000,
            imagen: 'https://images.unsplash.com/photo-1527434009951-75a8f7558468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            descripcion: 'La mejor computadora para el regreso a clases is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'com12346'
        },
        {
            nombre: 'PlayStation',
            marca: 'Sony',
            categoria: 'Tecnologia',
            costo: 15000,
            imagen: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            descripcion: 'La mejor tecnologia para entretenimiento is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'tec12345'
        },
        {
            nombre: 'X-Box',
            marca: 'Microsoft',
            categoria: 'Tecnologia',
            costo: 13000,
            imagen: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80',
            descripcion: 'La mejor tecnologia para entretenimiento is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'tec12346'
        },
        {
            nombre: 'Playera',
            marca: 'Everlast',
            categoria: 'Ropa',
            costo: 300,
            imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            descripcion: 'La mejor playera del mercado is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'rop12346'
        },
        {
            nombre: 'Mochila',
            marca: 'Everlast',
            categoria: 'Ropa',
            costo: 1300,
            imagen: 'https://images.unsplash.com/photo-1505308144658-03c69861061a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
            descripcion: 'La mejor mochula del mercado is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar dummy text ever since',
            identificador: 'rop12347'
        }
    ];

    get productos(): Producto[]{
        return [...this._productos];
    }

    agregarProducto( producto: Producto ){
        this._productos.push( producto );
    }
}