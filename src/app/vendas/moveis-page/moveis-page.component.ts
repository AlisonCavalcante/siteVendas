import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Subscription, Observable } from 'rxjs';
import { ProdutoService } from './../../service.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produtos } from 'src/app/models/produtos.model';
@Component({
  selector: 'app-moveis-page',
  templateUrl: './moveis-page.component.html',
  styleUrls: ['./moveis-page.component.css'],
})
export class MoveisPageComponent implements OnInit {
  produtos$!: Observable<Produtos[]>;
  sub!: Subscription;
  constructor(
    private produtoService: ProdutoService,
    private authService: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.updateLoggedIn();
    this.produtos$ = this.produtoService.buscarProdutoTipo('Eletronico');
  }
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

  detalheProduto(id: number) {
    this.router.navigate(['/vendas/detalheProduto', id]);
  }
}
