import { Endereco } from './endereco.model';

export interface User{
  id: number,
  cpf: number,
  nome: string,
  email: string,
  senha: string,
  endereco: Endereco
}
