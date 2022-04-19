import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';

import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { PagamentoComponent } from './pagamento/pagamento.component';



const comprasRoutes: Routes = [
  { path: '', component: CestaComprasComponent },
  { path: 'pagamento', component: PagamentoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(comprasRoutes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
