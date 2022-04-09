import { Constantes } from './utils/constantes';
import { HttpClient } from '@angular/common/http';
import { User } from './models/users.model';
import { Observable } from 'rxjs';
import { Produtos } from './models/produtos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private produto!: Produtos[];
  constructor(private http: HttpClient) { }

  setProduto(produto: Produtos[]){
    this.produto = produto;
  }

  getProduto(){
    return this.produto;
  }

  getUsuario(): Observable<User>{
    return this.http.get<User>(Constantes.GETUSER);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(Constantes.GETUSER, user);
  }

}
