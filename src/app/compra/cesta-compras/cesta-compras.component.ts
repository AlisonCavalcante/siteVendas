import { ProdutoService } from 'src/app/service.service';
import { DataService } from '../../data.service';
import { Produtos } from '../../models/produtos.model';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { DialogAlterarEnderecoComponent } from '../../components/dialog-alterar-endereco/dialog-alterar-endereco.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css'],
})
export class CestaComprasComponent implements OnInit {
  meses: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  formulario!: FormGroup;
  fretes = ['Normal', 'Rapidão'];
  produtos: Produtos[] = [];
  teste = false;
  aplicar: boolean = false;
  subtotal: number = 0;
  quantidadeItens: number = 0;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private produtoService: ProdutoService,
  ) {
    // Obtendo objeto via rota
    // let result = this.router.getCurrentNavigation();
    // console.log(result?.extras.state);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAlterarEnderecoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
      qtd: [1],
    });

    console.log(this.formulario.get('qtd'));

    // if (this.dataService.getProduto()) {
    //   this.produto = this.dataService.getProduto();
    // }
    // console.log(this.produto);

   this.produtos = this.produtoService.getCarrinho();
   console.log(this.produtos);
   this.obterTotaisIniciais();
  }

  obterTotaisIniciais(){
    for(let i of this.produtos){
      this.subtotal += (i.quantidade * i.preco);
      this.quantidadeItens += i.quantidade;
    }
  }

  delete(index: number){
    this.quantidadeItens -= this.produtos[index].quantidade;
    this.subtotal -= (this.produtos[index].quantidade * this.produtos[index].preco);
    this.produtos = this.produtoService.deleteProdutoCarrinho(index, this.produtos);
  }
  increment(index: number){
    this.produtos[index].quantidade += 1;
    console.log(this.produtos[index].quantidade);
    this.subtotal += this.produtos[index].preco;
    this.quantidadeItens += 1;
  }
  decrement(index: number){
    if(this.produtos[index].quantidade > 1){
    this.produtos[index].quantidade -= 1;
    this.subtotal -= this.produtos[index].preco;
    this.quantidadeItens -= 1;
    }
    console.log(this.produtos[index].quantidade);
  }

  aplicarCupom(){
    this.aplicar = !this.aplicar
    console.log(this.aplicar)
  }
  buildFrete() {
    const values = this.fretes.map((v) => new FormControl(false));
    return this.formBuilder.array(values);
    // return this.formBuilder.array([
    //   new FormControl(false),
    //   new FormControl(false)
    // ])
  }
  onSubmit() {}
  removerProduto() {
    this.dataService.setProduto([]);
  }
  pagamento() {
    this.router.navigate(['compra/pagamento']);
  }
}
