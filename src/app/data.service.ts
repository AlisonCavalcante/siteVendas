import { Produtos } from './models/produtos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private produto!: Produtos[];
  constructor() { }

  setProduto(produto: Produtos[]){
    this.produto = produto;
  }

  getProduto(){
    return this.produto;
  }
}
