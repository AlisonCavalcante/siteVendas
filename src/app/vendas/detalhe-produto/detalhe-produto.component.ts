import { Observable } from 'rxjs';
import { DataService } from './../../data.service';
import { Endereco } from 'src/app/models/endereco.model';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutoService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  panelOpenState = false;
  meuFavorito: boolean = true;
  id!: number;
  cep!: string;
  enderecoEntrega!: Endereco;
  produtos$!: Observable <Produtos[]>;

  constructor(private route: Router, private activeRouter: ActivatedRoute, private produtoService: ProdutoService, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    this.getProduto();
  }
  favoritar(){
    this.meuFavorito = !this.meuFavorito;
  }
  getProduto(){
   this.produtos$ = this.produtoService.buscarProdutoId(this.id);
   console.log(this.produtos$);
  }
  buscarCep(){
   this.produtoService.consultarCep(this.cep).subscribe(res => {
     this.enderecoEntrega = res;
     console.log(this.enderecoEntrega)
   })
  }
  comprar(produto: Produtos[]){

    // this.route.navigateByUrl('/cesta', {
    //   state: this.produto
    // })
    this.dataService.setProduto(produto);
    this.route.navigate(['/compra']);
  }


}
