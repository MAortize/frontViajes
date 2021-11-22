import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [

  { path: 'listaClientes', component: ListaClientesComponent },
  { path: 'nuevoCliente', component: NuevoClienteComponent },
  { path: '', redirectTo: 'listaClientes', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
