import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [

 { path: 'auth', loadChildren: ()=> import('./core/auth/auth.module').then(x => x.AuthModule) },
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [ 
  { path: 'clientes', loadChildren: () => import('./feature/clientes/clientes.module').then(x => x.ClientesModule) },
 ] },
 { path: '', redirectTo: 'auth', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
