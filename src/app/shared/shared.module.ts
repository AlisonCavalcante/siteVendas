import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { FiltrosComponent } from './filtros/filtros.component';
import { DialogEnderecoComponent } from './dialog-endereco/dialog-endereco.component';
import { MensagensComponent } from './mensagens/mensagens/mensagens.component';




@NgModule({
  declarations: [
    FiltrosComponent,
    DialogEnderecoComponent,
    MensagensComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    FiltrosComponent,
    MensagensComponent
  ]
})
export class SharedModule { }
