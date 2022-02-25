import { MinhaContaComponent } from './minha-conta.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MinhaContaDadosComponent } from './minha-conta-dados/minha-conta-dados.component';
import { MinhaContaEnderecosComponent } from './minha-conta-enderecos/minha-conta-enderecos.component';

const minhaContaRoutes: Routes = [
  {
    path: 'minhaconta',
    component: MinhaContaComponent,
    children: [
      { path: ':id', component: MinhaContaDadosComponent},
      {  path: ':id/enderecos', component: MinhaContaEnderecosComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(minhaContaRoutes)],
  exports: [RouterModule],
})
export class MinhaContaRouting {}
