import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FiltrosComponent } from './filtros/filtros.component';




@NgModule({
  declarations: [
    FiltrosComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class SharedModule { }
