import { Subscription, Observable } from 'rxjs';
import { ProdutoService } from './../../service.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Produtos } from 'src/app/models/produtos.model';
@Component({
  selector: 'app-moveis-page',
  templateUrl: './moveis-page.component.html',
  styleUrls: ['./moveis-page.component.css'],
})
export class MoveisPageComponent implements OnInit, OnDestroy {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  produtos$!: Observable <Produtos[]>;
  sub!: Subscription;
  constructor(private produtoService: ProdutoService,private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
   this.produtos$ = this.produtoService.buscarProdutoTipo("Eletronico");
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

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  detalheProduto(id: number) {
    this.router.navigate(['/vendas/detalheProduto', id]);
  }
  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
