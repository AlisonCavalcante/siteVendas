import { DataService } from 'src/app/data.service';
import { Observable } from 'rxjs';
import { Produtos } from '../../models/produtos.model';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos$!: Observable<Produtos[]>;
  constructor(private service: ProdutoService, private dataService: DataService) { }

  ngOnInit(): void {
    this.buscarprodutoTipo();
    this.getUser();
  }
  buscarprodutoTipo(){
   this.produtos$ = this.service.buscarProdutoTipo("Eletronico");
   console.log(this.produtos$)
  }
  getUser(){
    this.dataService.getUsuario().subscribe(res =>{
      console.log(res);
    })
  }

}
