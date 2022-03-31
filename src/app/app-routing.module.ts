import { MoveisPageComponent } from './views/moveis-page/moveis-page.component';
import { DetalheProdutoComponent } from './views/detalhe-produto/detalhe-produto.component';
import { FormNovoEnderecoComponent } from './views/form-novo-endereco/form-novo-endereco.component';
import { MaterialEscolarPageComponent } from './views/material-escolar-page/material-escolar-page.component';
import { EletrodomesticosPageComponent } from './views/eletrodomesticos-page/eletrodomesticos-page.component';
import { HomeComponent } from './views/home/home.component';
import { CestaComprasComponent } from './views/cesta-compras/cesta-compras.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eletrodomesticos',
    component: EletrodomesticosPageComponent,
  },
  {
    path: 'materialEscolar',
    component: MaterialEscolarPageComponent,
  },
  {
    path: 'cesta',
    component: CestaComprasComponent,
  },
  {
    path: 'novoEndereco',
    component: FormNovoEnderecoComponent,
  },
  {
    path: 'detalheProduto',
    component: DetalheProdutoComponent,
  },
  {
    path: 'moveisPage',
    component: MoveisPageComponent,
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule),
  },
  {
    path: 'minhaconta',
    loadChildren: () => import('./minha-conta/minhaConta.module').then(m => m.MinhaContaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
