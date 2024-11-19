import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvioCEComponent } from './cuce/cuce.component';
import { ListaCEComponent } from './lista-ce/lista-ce.component';
import { CuAbogadoComponent } from './cu-abogado/cu-abogado.component';
import { ListaAbogadosComponent } from './lista-abogados/lista-abogados.component';
import { ListaCategoriaProcesoComponent } from './lista-categoria-proceso/lista-categoria-proceso.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { ListaProcesosComponent } from './lista-procesos/lista-procesos.component';
import { CuCategoriaProcesoComponent } from './cu-categoria-proceso/cu-categoria-proceso.component';
import { CuClientesComponent } from './cu-clientes/cu-clientes.component';
import { CuEventosComponent } from './cu-eventos/cu-eventos.component';
import { CuProcesoComponent } from './cu-proceso/cu-proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvioCEComponent,
    ListaCEComponent,
    ListaAbogadosComponent,
    ListaCategoriaProcesoComponent,
    ListaClientesComponent,
    ListaEventosComponent,
    ListaProcesosComponent,
    CuAbogadoComponent,
    CuCategoriaProcesoComponent,
    CuClientesComponent,
    CuEventosComponent,
    CuProcesoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
