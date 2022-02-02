import { ProdutoService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/components/produtos.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-cosmeticos-page',
  templateUrl: './cosmeticos-page.component.html',
  styleUrls: ['./cosmeticos-page.component.css']
})
export class CosmeticosPageComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  produtos!: Produtos[];

  constructor(private _snackBar: MatSnackBar,private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.buscarProdutoTipo("Cosmético").subscribe(produto=>{
      this.produtos = produto;
    })
  }

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
