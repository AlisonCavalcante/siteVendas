import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';



const comprasRoutes: Routes = [
  { path: '', component: CestaComprasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(comprasRoutes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
