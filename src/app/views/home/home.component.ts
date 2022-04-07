import { Observable } from 'rxjs';
import { Produtos } from './../../components/produtos.model';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos$!: Observable<Produtos[]>;
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.buscarprodutoTipo();
  }
  buscarprodutoTipo(){
   this.produtos$ = this.service.buscarProdutoTipo("Eletronico");
   console.log(this.produtos$)
  }

}
