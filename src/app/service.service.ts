import { Endereco } from './components/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './components/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  urlBase: string = 'http://localhost:3001/produtos';
  sidenav_opened = true;

  constructor(private http: HttpClient) {}

  acaoNav(valor: boolean): Boolean {
    return (this.sidenav_opened = valor);
  }

  buscarProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.urlBase);
  }
  buscarProdutoTipo(tipo: string): Observable<Produtos[]> {
    const url = `${this.urlBase}/${'?tipo='}${tipo}`;
    return this.http.get<Produtos[]>(url);
  }

  consultarCep(cep: string): Observable<Endereco> {
    cep = cep.replace(/\D/g, '');
    var validaCep = /^[0-9]{8}$/;
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
