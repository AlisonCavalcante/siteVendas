import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';

const cadastroRoutes: Routes = [
  {path: 'cosmetico', component: CosmeticosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
})
export class VendasRoutingModule {}
