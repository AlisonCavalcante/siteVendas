import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';
import { EletronicosPageComponent } from './eletronicos-page/eletronicos-page.component';
import { EletrodomesticosPageComponent } from './eletrodomesticos-page/eletrodomesticos-page.component';

const cadastroRoutes: Routes = [
  {path: 'cosmetico', component: CosmeticosPageComponent},
  {path: 'eletronicos', component: EletronicosPageComponent},
  {path: 'eletrodomesticos', component: EletrodomesticosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
