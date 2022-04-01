import { Endereco } from 'src/app/components/endereco.model';
import { Produtos } from 'src/app/components/produtos.model';
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
  id!: number;
  cep!: string;
  enderecoEntrega!: Endereco;
  produto: Produtos[] = [];

  constructor(private route: Router, private activeRouter: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    this.getProduto();
  }
  getProduto(){
    this.produtoService.buscarProdutoId(this.id).subscribe(res => {
      this.produto = res;
      console.log(this.produto)
    })
  }
  buscarCep(){
   this.produtoService.consultarCep(this.cep).subscribe(res => {
     this.enderecoEntrega = res;
     console.log(this.enderecoEntrega)
   })
  }
  comprar(){
    this.route.navigate(["/cesta"]);
  }

}
