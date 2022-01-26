import { Produtos } from './../../components/produtos.model';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-eletronicos-page',
  templateUrl: './eletronicos-page.component.html',
  styleUrls: ['./eletronicos-page.component.css'],
})
export class EletronicosPageComponent implements OnInit {
  selectedValue: string = '';
  categorias: any[] = [{ tipo: 'Eletrônico' }, { tipo: 'Eletrodomésticos' }];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
