import { Constantes } from './utils/constantes';
import { HttpClient } from '@angular/common/http';
import { User } from './models/users.model';
import { Observable, take } from 'rxjs';
import { Produtos } from './models/produtos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private produto!: Produtos[];
  private usuario!: User[];
  constructor(private http: HttpClient) { }

  setProduto(produto: Produtos[]){
    this.produto = produto;
  }

  getProduto(){
    return this.produto;
  }

  setUser(user: User[]){
    console.log(user);
    this.usuario = user;
  }

  //mudar o nome
  getUser(): User[]{
    return this.usuario;
  }
  getCurrentUser(): User[] {
    let currentUser = localStorage.getItem('User');
    if (currentUser) {
      this.usuario = JSON.parse(currentUser);
    }
    return this.usuario;
  }
  updateCurrentUSer(user: User[]): void{
    localStorage.clear();
    localStorage.setItem('User', JSON.stringify(user))
  }

  getUsuario(user: User): Observable<User[]>{
    return this.http.get<User[]>(Constantes.URLUSER+`${'?cpf='}${user.cpf}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(Constantes.URLUSER, user);
  }

  updateUser(user: User[]): Observable<User[]>{
    console.log(user);
    return this.http.put<User[]>(Constantes.URLUSER+`/${user[0].id}`, user[0]).pipe(take(1));
  }

  deleteEndereco(user: User[], index: number): Observable<User[]> {
    user[0].endereco.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('User', JSON.stringify(user));
   return this.http.put<User[]>(Constantes.URLUSER+`/${user[0].id}`, user[0]).pipe(take(1));
  }

}
