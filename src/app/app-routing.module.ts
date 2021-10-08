import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAdminComponent } from "./administrador/add-admin/add-admin.component";
import { LoginComponent } from "./login-registro/login/login.component";
import { RegistroComponent } from "./login-registro/registro/registro.component";
import { ListaProductosComponent } from './home/lista-productos/lista-productos.component';
import { AgregProductoComponent } from './producto/agreg-producto/agreg-producto.component';
import { SistemaService } from './services/sistema.service';


const routes: Routes = [
    {
        path: '',
        component: ListaProductosComponent
    },
    {
        path: 'addproducto',
        component: AgregProductoComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'agregarAdmin',
        component: AddAdminComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SistemaService
    ]
})
export class AppRoutingModule {

}