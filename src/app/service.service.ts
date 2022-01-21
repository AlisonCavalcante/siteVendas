import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './components/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlBase: string = "http://localhost:3001/produtos";
  sidenav_opened = true;

  constructor(private http: HttpClient) { }

  acaoNav(valor: boolean): Boolean{
    return this.sidenav_opened = valor;
  }

  buscarProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.urlBase)
  }

}
