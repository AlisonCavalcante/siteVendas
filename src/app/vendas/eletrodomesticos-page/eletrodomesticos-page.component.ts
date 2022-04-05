import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produtos } from 'src/app/components/produtos.model';

@Component({
  selector: 'app-eletrodomesticos-page',
  templateUrl: './eletrodomesticos-page.component.html',
  styleUrls: ['./eletrodomesticos-page.component.css'],
})
export class EletrodomesticosPageComponent implements OnInit, OnDestroy {
  produtos!: Produtos[];
  anos: string[] = [
    'Mais populares',
    'Mais Vendidos',
    'Lançamentos',
    'Ofertas',
    'Maior preço',
    'Menor Preço',
  ];
  sub!: Subscription;

  constructor(private service: ProdutoService, private route: Router) {}

  ngOnInit(): void {
    this.sub = this.service.buscarProdutoTipo('Eletronico').subscribe((produtos) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  detalheProduto(id: number) {
     this.route.navigate(['/vendas/detalheProduto', id]);
  }
}
