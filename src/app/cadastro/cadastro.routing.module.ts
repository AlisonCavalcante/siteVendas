import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './cadastro.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';


const cadastroRoutes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'criarContaPage', component: CriarContaComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
