import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ClienteService } from './shared/services/cliente.service';


@NgModule({
  declarations: [
    ListaClientesComponent,
    NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule { }
