import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Router } from '@angular/router';
import { ProdutoService } from './../../service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cosmeticos-page',
  templateUrl: './cosmeticos-page.component.html',
  styleUrls: ['./cosmeticos-page.component.css']
})
export class CosmeticosPageComponent implements OnInit, OnDestroy {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  produtos$!: Observable <Produtos[]>;
  anos: string[] = ["Mais populares", "Mais Vendidos","Lançamentos","Ofertas","Maior preço","Menor Preço"];
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
        items: 1
      },
    },
    nav: true
  }
  sub!: Subscription;

  constructor(private route: Router,private _snackBar: MatSnackBar,private produtoService: ProdutoService, private authService: AuthserviceService) { }

  ngOnInit(): void {

    this.authService.updateLoggedIn();

    // abordagem com pipe async
    this.produtos$ = this.produtoService.buscarProdutoTipo("Cosmético");

  }

  ngOnDestroy(): void {
    // Abordagem de unsubscribe manual através de Subscription
    // this.sub.unsubscribe();
  }

  detalheProduto(id: number){
     this.route.navigate(['/vendas/detalheProduto', id]);
  }

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
