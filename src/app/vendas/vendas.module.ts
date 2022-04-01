import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { CosmeticosPageComponent } from './cosmeticos-page/cosmeticos-page.component';
import { VendasRoutingModule } from './vendas.routing.module';
import { EletronicosPageComponent } from './eletronicos-page/eletronicos-page.component';
import { EletrodomesticosPageComponent } from './eletrodomesticos-page/eletrodomesticos-page.component';
import { MoveisPageComponent } from './moveis-page/moveis-page.component';
import { MaterialEscolarPageComponent } from './material-escolar-page/material-escolar-page.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';



@NgModule({
  declarations: [
    CosmeticosPageComponent,
    EletronicosPageComponent,
    EletrodomesticosPageComponent,
    MoveisPageComponent,
    MaterialEscolarPageComponent,
    DetalheProdutoComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    VendasRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    SharedModule,
    MatButtonModule,
    FormsModule
  ]
})
export class VendasModule { }
