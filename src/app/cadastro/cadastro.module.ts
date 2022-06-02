import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CadastroRoutingModule } from './cadastro.routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { CadastroComponent } from './cadastro.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CadastroComponent,
    CriarContaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CadastroRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [CriarContaComponent]
})
export class CadastroModule { }
