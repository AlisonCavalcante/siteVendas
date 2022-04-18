import { Produtos } from './produtos.model';
export interface Pedidos {
  idPedido: number;
  produtos: Produtos[];
}
