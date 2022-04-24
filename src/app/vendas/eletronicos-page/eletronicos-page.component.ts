import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';
import { Produtos } from '../../models/produtos.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-eletronicos-page',
  templateUrl: './eletronicos-page.component.html',
  styleUrls: ['./eletronicos-page.component.css'],
})
export class EletronicosPageComponent implements OnInit {
  selectedValue: string = '';
  categorias: any[] = [{ tipo: 'Eletrônico' }, { tipo: 'Eletrodomésticos' }];
  produtos$!: Observable<Produtos[]>;
  anos: string[] = [
    'Mais populares',
    'Mais Vendidos',
    'Lançamentos',
    'Ofertas',
    'Maior preço',
    'Menor Preço',
  ];
  sub!: Subscription;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(
    private authService: AuthserviceService,
    private service: ProdutoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.authService.updateLoggedIn();
    this.produtos$ = this.service.buscarProdutoTipo('Eletronico');
  }

  detalheProduto(id: number) {
    this.route.navigate(['/vendas/detalheProduto', id]);
  }
}
