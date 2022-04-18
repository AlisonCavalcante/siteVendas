import { MinhaContaComponent } from './minha-conta.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MinhaContaDadosComponent } from './minha-conta-dados/minha-conta-dados.component';
import { MinhaContaEnderecosComponent } from './minha-conta-enderecos/minha-conta-enderecos.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { DetalhePedidoComponent } from './detalhe-pedido/detalhe-pedido.component';

const minhaContaRoutes: Routes = [
  {
    path: '',
    component: MinhaContaComponent,
    children: [
      { path: 'meusDados', component: MinhaContaDadosComponent },
      { path: 'enderecos', component: MinhaContaEnderecosComponent },
      {
        path: 'meusPedidos',
        component: MeusPedidosComponent,
        children: [
          { path: 'detalhePedido', component: DetalhePedidoComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(minhaContaRoutes)],
  exports: [RouterModule],
})
export class MinhaContaRouting {}
