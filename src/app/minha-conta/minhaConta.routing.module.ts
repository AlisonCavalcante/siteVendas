
import { MinhaContaComponent } from './minha-conta.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MinhaContaDadosComponent } from './minha-conta-dados/minha-conta-dados.component';
import { MinhaContaEnderecosComponent } from './minha-conta-enderecos/minha-conta-enderecos.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const minhaContaRoutes: Routes = [
  {
    path: '',
    component: MinhaContaComponent,
    children: [
      { path: ':id', component: MinhaContaDadosComponent, canActivate: [AuthGuard]},
      { path: ':id/enderecos', component: MinhaContaEnderecosComponent, canActivate: [AuthGuard]},
      { path: ':id/meusPedidos', component: MeusPedidosComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(minhaContaRoutes)],
  exports: [RouterModule],
})
export class MinhaContaRouting {}
