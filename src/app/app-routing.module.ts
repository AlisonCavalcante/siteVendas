import { MinhaContaPageComponent } from './views/minha-conta-page/minha-conta-page.component';
import { CriarContaComponent } from './views/criar-conta/criar-conta.component';
import { MoveisPageComponent } from './views/moveis-page/moveis-page.component';
import { DetalheProdutoComponent } from './views/detalhe-produto/detalhe-produto.component';
import { FormNovoEnderecoComponent } from './views/form-novo-endereco/form-novo-endereco.component';
import { CosmeticosPageComponent } from './views/cosmeticos-page/cosmeticos-page.component';
import { MaterialEscolarPageComponent } from './views/material-escolar-page/material-escolar-page.component';
import { EletrodomesticosPageComponent } from './views/eletrodomesticos-page/eletrodomesticos-page.component';

import { HomeComponent } from './views/home/home.component';
import { EletronicosPageComponent } from './views/eletronicos-page/eletronicos-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CestaComprasComponent } from './views/cesta-compras/cesta-compras.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eletronicos',
    component: EletronicosPageComponent,
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
     path: 'cadastro',
     component: CadastroComponent,
   },
  {
    path: 'cosmetico',
    component: CosmeticosPageComponent,
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
    path: 'criarContaPage',
    component: CriarContaComponent,
  },
  {
    path: 'minhaContaPage',
    component: MinhaContaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
