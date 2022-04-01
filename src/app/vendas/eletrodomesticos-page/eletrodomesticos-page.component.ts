import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/components/produtos.model';

@Component({
  selector: 'app-eletrodomesticos-page',
  templateUrl: './eletrodomesticos-page.component.html',
  styleUrls: ['./eletrodomesticos-page.component.css'],
})
export class EletrodomesticosPageComponent implements OnInit {
  produtos!: Produtos[];
  anos: string[] = [
    'Mais populares',
    'Mais Vendidos',
    'Lançamentos',
    'Ofertas',
    'Maior preço',
    'Menor Preço',
  ];

  constructor(private service: ProdutoService, private route: Router) {}

  ngOnInit(): void {
    this.service.buscarProdutoTipo('Eletronico').subscribe((produtos) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }
  detalheProduto() {
     this.route.navigate(['/detalheProduto']);
  }
}
