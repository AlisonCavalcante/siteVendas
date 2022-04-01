import { ProdutoService } from './../../service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Produtos } from 'src/app/components/produtos.model';
@Component({
  selector: 'app-moveis-page',
  templateUrl: './moveis-page.component.html',
  styleUrls: ['./moveis-page.component.css'],
})
export class MoveisPageComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  produtos!:  Produtos[];
  constructor(private produtoService: ProdutoService,private router: Router, private _snackBar: MatSnackBar) {
    this.produtoService.buscarProdutoTipo("Eletronico").subscribe(produto=>{
      this.produtos = produto;
    })
  }

  ngOnInit(): void {}
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

  detalheProduto() {
    this.router.navigate(['/vendas/detalheProduto']);
  }
  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
