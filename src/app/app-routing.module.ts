import { HomeComponent } from './views/home/home.component';
import { EletronicosPageComponent } from './views/eletronicos-page/eletronicos-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eletronicos',
    component: EletronicosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
