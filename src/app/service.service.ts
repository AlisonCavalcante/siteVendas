import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  sidenav_opened = true;

  constructor() { }

  acaoNav(valor: boolean): Boolean{
    return this.sidenav_opened = valor;
  }
}
