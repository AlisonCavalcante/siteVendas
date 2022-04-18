import { Endereco } from './endereco.model';
import { Pedidos } from './pedidos.model';

export interface User {
  id: number;
  cpf: number;
  nome: string;
  email: string;
  senha: string;
  pedidos: Pedidos[];
  endereco: Endereco[];
}
