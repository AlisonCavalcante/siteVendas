import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';

@Component({
  selector: 'app-eletrodomesticos-page',
  templateUrl: './eletrodomesticos-page.component.html',
  styleUrls: ['./eletrodomesticos-page.component.css'],
})
export class EletrodomesticosPageComponent implements OnInit, OnDestroy {

  produtos$!: Observable <Produtos[]>;
  anos: string[] = [
    'Mais populares',
    'Mais Vendidos',
    'Lançamentos',
    'Ofertas',
    'Maior preço',
    'Menor Preço',
  ];
  sub!: Subscription;

  constructor(private service: ProdutoService,private authService: AuthserviceService ,private route: Router) {}

  ngOnInit(): void {
    this.authService.updateLoggedIn();
    this.produtos$ = this.service.buscarProdutoTipo('Eletronico');
  }
  ngOnDestroy(): void {
     // Abordagem de unsubscribe manual através de Subscription
    // this.sub.unsubscribe();
  }
  detalheProduto(id: number) {
     this.route.navigate(['/vendas/detalheProduto', id]);
  }
}
