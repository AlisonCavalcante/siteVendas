import { MinhaContaPageComponent } from './views/minha-conta-page/minha-conta-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MinhaContaModule } from './minha-conta/minhaConta.module';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ContentComponent } from './views/content/content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { EletronicosPageComponent } from './views/eletronicos-page/eletronicos-page.component';
import { HomeComponent } from './views/home/home.component';
import { CestaComprasComponent } from './views/cesta-compras/cesta-compras.component';
import { EletrodomesticosPageComponent } from './views/eletrodomesticos-page/eletrodomesticos-page.component';
import { MaterialEscolarPageComponent } from './views/material-escolar-page/material-escolar-page.component';
import { DialogAlterarEnderecoComponent } from './components/dialog-alterar-endereco/dialog-alterar-endereco.component';
import { CosmeticosPageComponent } from './views/cosmeticos-page/cosmeticos-page.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FormNovoEnderecoComponent } from './views/form-novo-endereco/form-novo-endereco.component';
import { DetalheProdutoComponent } from './views/detalhe-produto/detalhe-produto.component';
import { MoveisPageComponent } from './views/moveis-page/moveis-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    ContentComponent,
    SideNavComponent,
    EletronicosPageComponent,
    HomeComponent,
    CestaComprasComponent,
    EletrodomesticosPageComponent,
    MaterialEscolarPageComponent,
    DialogAlterarEnderecoComponent,
    CosmeticosPageComponent,
    FiltrosComponent,
    FormNovoEnderecoComponent,
    DetalheProdutoComponent,
    MoveisPageComponent,
    MinhaContaPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTabsModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatCheckboxModule,
    MatExpansionModule,
    CarouselModule,
    ReactiveFormsModule,
    MinhaContaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
