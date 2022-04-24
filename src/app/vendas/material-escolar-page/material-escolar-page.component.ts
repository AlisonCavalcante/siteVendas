import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutoService } from './../../service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-escolar-page',
  templateUrl: './material-escolar-page.component.html',
  styleUrls: ['./material-escolar-page.component.css'],
})
export class MaterialEscolarPageComponent implements OnInit {
  produtos$!: Observable<Produtos[]>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  anos: string[] = [
    'Mais populares',
    'Mais Vendidos',
    'Lançamentos',
    'Ofertas',
    'Maior preço',
    'Menor Preço',
  ];
  sub!: Subscription;
  constructor(
    private route: Router,
    private authService: AuthserviceService,
    private _snackBar: MatSnackBar,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.authService.updateLoggedIn();
    this.produtos$ = this.produtoService.buscarProdutoTipo('Cosmético');
  }

  detalheProduto(id: number) {
    this.route.navigate(['/vendas/detalheProduto', id]);
  }
}
