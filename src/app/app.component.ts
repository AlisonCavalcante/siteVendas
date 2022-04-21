import { ProdutoService } from 'src/app/service.service';
import { AuthserviceService } from './cadastro/services/authservice.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Produtos } from './models/produtos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-vendas';
  isLoggedIn$!: Observable<boolean>;
  carrinho$!: Observable<Produtos[]>;

  constructor(private authService: AuthserviceService, private produtoService: ProdutoService ){
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.carrinho$ = this.produtoService.carrinho$;
  }
  onlogout(): void{
    this.authService.logout();
  }
}
