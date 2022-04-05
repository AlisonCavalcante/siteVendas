import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';
import { Produtos } from './../../components/produtos.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-eletronicos-page',
  templateUrl: './eletronicos-page.component.html',
  styleUrls: ['./eletronicos-page.component.css'],
})
export class EletronicosPageComponent implements OnInit, OnDestroy {

  selectedValue: string = '';
  categorias: any[] = [{ tipo: 'Eletrônico' }, { tipo: 'Eletrodomésticos' }];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  produtos!:  Produtos[];
  anos: string[] = ["Mais populares", "Mais Vendidos","Lançamentos","Ofertas","Maior preço","Menor Preço"];
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
        items: 1
      },
    },
    nav: true
  }

  constructor(private _snackBar: MatSnackBar, private service: ProdutoService, private route: Router) {

  }

  ngOnInit(): void {
    this.service.buscarProdutoTipo("Eletronico").subscribe(produtos=>{
    this.produtos = produtos;
    console.log(produtos);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
