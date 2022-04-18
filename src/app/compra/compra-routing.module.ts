import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { PagamentoComponent } from './pagamento/pagamento.component';



const comprasRoutes: Routes = [
  { path: '', component: CestaComprasComponent },
  { path: 'pagamento', component: PagamentoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(comprasRoutes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
