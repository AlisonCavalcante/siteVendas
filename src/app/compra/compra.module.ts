import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CadastroRoutingModule } from './compra-routing.module';
import { MatButtonModule } from '@angular/material/button';


import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { PagamentoComponent } from './pagamento/pagamento.component';



@NgModule({
  declarations: [
    CestaComprasComponent,
    PagamentoComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CadastroRoutingModule,
    MatButtonModule
  ]
})
export class CompraModule { }
