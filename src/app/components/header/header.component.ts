import { Produtos } from './../../models/produtos.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {


  qtdProdutosCesta!: number;
  subtotal: number = 0;
  @Input() isLoggedIn: boolean | null = null;
  @Input() carrinho: Produtos[] | null = null;
  @Output() private logout = new EventEmitter();
  produtos!: Produtos[];
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let carrinho = localStorage.getItem('Carrinho');
    if(carrinho){
      this.produtos = JSON.parse(carrinho);
      this.qtdProdutosCesta = this.produtos.length;
      for(let i of this.produtos){
        this.subtotal += i.preco;
      }
    }
    console.log(this.carrinho);
    console.log(changes)
  }

  teste(): void {
    console.log('testando');
  }
  navegar(tela: string) {
    if (tela == 'compra') {
      this.router.navigate(['/compra']);
    } else if (tela == 'cadastro') {
      this.router.navigate(['/cadastro']);
    }else if(tela == 'minhaContaPage'){
      console.log("entrando aqqui")
      this.router.navigate(['/minhaconta']);
    }else if('login'){
      this.router.navigate(['/cadastro']);
    }
  }

  onlogout(): void{
    this.logout.emit();
  }
}
