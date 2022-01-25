import { Produtos } from './../../components/produtos.model';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produto!: Produtos[];
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
  }
  buscarprodutoTipo(){
    this.service.buscarProdutoTipo("Eletronico").subscribe(produto=>{
      this.produto = produto;
      console.log(this.produto);
      }
    )
  }

}
