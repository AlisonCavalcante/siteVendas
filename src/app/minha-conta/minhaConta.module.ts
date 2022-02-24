import { CommonModule } from '@angular/common';
import { MinhaContaComponent } from './minha-conta.component';
import { NgModule } from "@angular/core";
import { MinhaContaRouting } from './minhaConta.routing.module';
import { MinhaContaDadosComponent } from './minha-conta-dados/minha-conta-dados.component';
import { MinhaContaEnderecosComponent } from './minha-conta-enderecos/minha-conta-enderecos.component';

@NgModule({
  declarations:[
    MinhaContaComponent,
    MinhaContaDadosComponent,
    MinhaContaEnderecosComponent
  ],
  imports: [
    CommonModule,
    MinhaContaRouting
  ],
  exports: [
    MinhaContaDadosComponent
  ]
})

export class MinhaContaModule{}
