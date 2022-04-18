import { FormNovoEnderecoComponent } from './views/form-novo-endereco/form-novo-endereco.component';
import { HomeComponent } from './views/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'novoEndereco',
    component: FormNovoEnderecoComponent,
  },
  {
    path: 'compra',
    loadChildren: () =>
      import('./compra/compra.module').then((c) => c.CompraModule),
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./cadastro/cadastro.module').then((m) => m.CadastroModule),
  },
  {
    path: 'minhaconta',
    loadChildren: () =>
      import('./minha-conta/minhaConta.module').then((m) => m.MinhaContaModule),
  },
  {
    path: 'vendas',
    loadChildren: () =>
      import('./vendas/vendas.module').then((m) => m.VendasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
