import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';
import { EletronicosPageComponent } from './eletronicos-page/eletronicos-page.component';

const cadastroRoutes: Routes = [
  {path: 'cosmetico', component: CosmeticosPageComponent},
  {path: 'eletronicos', component: EletronicosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
