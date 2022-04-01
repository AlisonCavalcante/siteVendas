import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';
import { EletronicosPageComponent } from './eletronicos-page/eletronicos-page.component';
import { EletrodomesticosPageComponent } from './eletrodomesticos-page/eletrodomesticos-page.component';
import { MoveisPageComponent } from './moveis-page/moveis-page.component';
import { MaterialEscolarPageComponent } from './material-escolar-page/material-escolar-page.component';

const cadastroRoutes: Routes = [
  {path: 'cosmetico', component: CosmeticosPageComponent},
  {path: 'eletronicos', component: EletronicosPageComponent},
  {path: 'eletrodomesticos', component: EletrodomesticosPageComponent},
  {path: 'moveisPage', component: MoveisPageComponent},
  {path: 'materialEscolar', component: MaterialEscolarPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
