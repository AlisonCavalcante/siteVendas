import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from './../../service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produtos } from 'src/app/components/produtos.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-escolar-page',
  templateUrl: './material-escolar-page.component.html',
  styleUrls: ['./material-escolar-page.component.css']
})
export class MaterialEscolarPageComponent implements OnInit, OnDestroy {

  produtos!: Produtos[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  anos: string[] = ["Mais populares", "Mais Vendidos","Lançamentos","Ofertas","Maior preço","Menor Preço"];
  sub!: Subscription;
  constructor(private route: Router,private _snackBar: MatSnackBar,private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.buscarProdutoTipo("Cosmético").subscribe(produto=>{
      this.produtos = produto;
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
