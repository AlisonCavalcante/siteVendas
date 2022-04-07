import { Produtos } from '../../models/produtos.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  produtos!: Produtos[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.buscarProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(produtos);
    });
  }
}
