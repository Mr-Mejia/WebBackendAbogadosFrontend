import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuAbogadoComponent } from './cu-abogado/cu-abogado.component';
import { ListaAbogadosComponent } from './lista-abogados/lista-abogados.component';
import { CuCategoriaProcesoComponent } from './cu-categoria-proceso/cu-categoria-proceso.component';
import { ListaCategoriaProcesoComponent } from './lista-categoria-proceso/lista-categoria-proceso.component';
import { EnvioCEComponent } from './cuce/cuce.component';
import { ListaCEComponent } from './lista-ce/lista-ce.component';
import { CuClientesComponent } from './cu-clientes/cu-clientes.component';
import { CuEventosComponent } from './cu-eventos/cu-eventos.component';
import { CuProcesoComponent } from './cu-proceso/cu-proceso.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { ListaProcesosComponent } from './lista-procesos/lista-procesos.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/listaAbogados',
    pathMatch:'full'
  },

  /***********RUTAS ABOGADOS*****/
  {
    path:'listaAbogados',
    component:ListaAbogadosComponent 
  },
  {
    path:'u-abogado/:id',
    component:CuAbogadoComponent 
  },
  {
    path:'c-abogado',
    component:CuAbogadoComponent 
  },

  /************RUTAS CATEGORIAS PROCESO***/
  {
    path:'listaCategoriaProceso',
    component:ListaCategoriaProcesoComponent 
  },

  {
    path:'u-categoria-proceso/:id',
    component:CuCategoriaProcesoComponent 
  },

  {
    path:'c-categoria-proceso',
    component:CuCategoriaProcesoComponent 
  },

  /***********RUTAS CATEGORÍAS EMPLEADOS********/
  {
    path:'listaCE',
    component:ListaCEComponent 
  },
  {
    path:'uce/:id',
    component:EnvioCEComponent
  },
  {
    path:'cce',
    component:EnvioCEComponent
  },

/**********RUTAS CLIENTES***********/
  {
    path:'listaClientes',
    component:ListaClientesComponent 
  },
  {
    path:'cu-clientes/:id',
    component:CuClientesComponent 
  },
  {
    path:'cu-clientes',
    component:CuClientesComponent 
  },

/*************RUTAS EVENTOS***********/
  {
    path:'listaEventos',
    component:ListaEventosComponent 
  },
  {
    path:'listaEventosByIdProceso/:id',
    component:ListaEventosComponent 
  },
  {
    path:'u-eventos/:id',
    component:CuEventosComponent 
  },
  {
    path:'c-eventos',
    component:CuEventosComponent 
  },

  /**********RUTAS PROCESOS********/
  {
    path:'listaProcesos',
    component:ListaProcesosComponent 
  },
  {
    path:'u-proceso/:id',
    component:CuProcesoComponent 
  },
  {
    path:'c-proceso',
    component:CuProcesoComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
