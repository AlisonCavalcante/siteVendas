import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';
import { VendasRoutingModule } from './vendas.routing.module';
import { EletronicosPageComponent } from './eletronicos-page/eletronicos-page.component';
import { EletrodomesticosPageComponent } from './eletrodomesticos-page/eletrodomesticos-page.component';
import { MoveisPageComponent } from './moveis-page/moveis-page.component';
import { MaterialEscolarPageComponent } from './material-escolar-page/material-escolar-page.component';



@NgModule({
  declarations: [
    CosmeticosPageComponent,
    EletronicosPageComponent,
    EletrodomesticosPageComponent,
    MoveisPageComponent,
    MaterialEscolarPageComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
