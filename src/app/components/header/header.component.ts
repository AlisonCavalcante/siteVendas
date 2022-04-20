import { Produtos } from './../../models/produtos.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  qtdProdutosCesta!: number;
  subtotal: number = 0;
  @Input() isLoggedIn: boolean | null = null;
  @Output() private logout = new EventEmitter();
  produtos!: Produtos[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    let carrinho = localStorage.getItem('Carrinho');
    if(carrinho){
      this.produtos = JSON.parse(carrinho);
      this.qtdProdutosCesta = this.produtos.length;
      for(let i of this.produtos){
        this.subtotal += parseInt(i.preco);
      }
    }

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
