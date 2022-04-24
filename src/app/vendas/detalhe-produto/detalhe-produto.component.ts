import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { delay, Observable } from 'rxjs';
import { DataService } from './../../data.service';
import { Endereco } from 'src/app/models/endereco.model';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutoService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  panelOpenState = false;
  meuFavorito: boolean = true;
  id!: number;
  cep!: string;
  enderecoEntrega!: Endereco;
  produtos$!: Observable<Produtos[]>;
  produto!: Produtos [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
    private activeRouter: ActivatedRoute,
    private produtoService: ProdutoService,
    private dataService: DataService,
    private authService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.authService.updateLoggedIn();
    this.id = this.activeRouter.snapshot.params['id'];
    this.getProduto();
  }
  favoritar() {
    this.meuFavorito = !this.meuFavorito;
  }
  getProduto() {
    this.produtos$ = this.produtoService.buscarProdutoId(this.id);
    console.log(this.produtos$);
  }
  buscarCep() {
    this.produtoService.consultarCep(this.cep).subscribe((res) => {
      this.enderecoEntrega = res;
      console.log(this.enderecoEntrega);
    });
  }
  comprar(produto: Produtos[]) {
    // this.route.navigateByUrl('/cesta', {
    //   state: this.produto
    // })
    this.dataService.setProduto(produto);
    this.route.navigate(['/compra']);
  }
  addCarrinho(produto: Produtos[]) {
   this.produtoService.addCarrinho(produto);
   this.openSnackBar('Produto Adicionado', 'X')
  }

  openSnackBar(mensagem: string, acao: string) {
   this._snackBar.open(mensagem, acao, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }
}
