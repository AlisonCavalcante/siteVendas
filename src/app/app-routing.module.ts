import { MaterialEscolarPageComponent } from './views/material-escolar-page/material-escolar-page.component';
import { EletrodomesticosPageComponent } from './views/eletrodomesticos-page/eletrodomesticos-page.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { EletronicosPageComponent } from './views/eletronicos-page/eletronicos-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CestaComprasComponent } from './views/cesta-compras/cesta-compras.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
