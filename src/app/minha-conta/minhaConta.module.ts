import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MinhaContaRouting } from './minhaConta.routing.module';

import { MinhaContaComponent } from './minha-conta.component';
import { MinhaContaDadosComponent } from './minha-conta-dados/minha-conta-dados.component';
import { MinhaContaEnderecosComponent } from './minha-conta-enderecos/minha-conta-enderecos.component';

import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations:[
    MinhaContaComponent,
    MinhaContaDadosComponent,
    MinhaContaEnderecosComponent
  ],
  imports: [
    CommonModule,
    MinhaContaRouting,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MinhaContaDadosComponent
  ]
})

export class MinhaContaModule{}
