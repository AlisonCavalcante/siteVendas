import { ProdutoService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
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
export class MaterialEscolarPageComponent implements OnInit {

  produtos!: Produtos[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
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
