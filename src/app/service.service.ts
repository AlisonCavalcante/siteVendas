import { Constantes } from './utils/constantes';
import { Endereco } from './models/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produtos } from './models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produto: Produtos[] = [];
  private carrinho = new BehaviorSubject<Produtos[]>(this.produto)
  carrinho$ = this.carrinho.asObservable();
  sidenav_opened = true;
  produtos: Produtos [] = [];
  constructor(private http: HttpClient) {}

  acaoNav(valor: boolean): Boolean {
    return (this.sidenav_opened = valor);
  }

  buscarProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(Constantes.URLBASE);
  }

  addCarrinho(produto: Produtos[]){
    let carrinho = localStorage.getItem('Carrinho');
    if (carrinho) {
      this.produto = JSON.parse(carrinho);
      this.produto.push(produto[0]);
      this.updateCarrinho(this.produto);
      localStorage.setItem('Carrinho', JSON.stringify(this.produto));
    } else {
      this.updateCarrinho(this.produto);
      localStorage.setItem('Carrinho', JSON.stringify(produto));
    }
  }
  updateCarrinho(produto: Produtos[]){
    this.carrinho.next(produto);
  }
  getCarrinho(): Produtos[]{
    let carrinho  = localStorage.getItem('Carrinho')
    if(carrinho){
      this.produtos = JSON.parse(carrinho);
    }
    return this.produtos;
  }
  deleteProdutoCarrinho(index: number, produtos: Produtos[]): Produtos[]{
    this.produtos.splice(index,1);
    localStorage.clear();
    localStorage.setItem('Carrinho', JSON.stringify(produtos));
    return produtos
  }
  buscarProdutoId(id: number): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(Constantes.URLBASE+`${'?id='}${id}`);
  }
  buscarProdutoTipo(tipo: string): Observable<Produtos[]> {
    const url = Constantes.URLBASE+`/${'?tipo='}${tipo}`;
    return this.http.get<Produtos[]>(url);
  }

  consultarCep(cep: string): Observable<Endereco> {
    cep = cep.replace(/\D/g, '');
    var validaCep = /^[0-9]{8}$/;
    return this.http.get<Endereco>(Constantes.URLCEP+`${cep}/json/`);
  }
}
