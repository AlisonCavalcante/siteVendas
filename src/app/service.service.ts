import { Constantes } from './utils/constantes';
import { Endereco } from './components/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './components/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  sidenav_opened = true;

  constructor(private http: HttpClient) {}

  acaoNav(valor: boolean): Boolean {
    return (this.sidenav_opened = valor);
  }

  buscarProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(Constantes.URLBASE);
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
