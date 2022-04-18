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
  formularioPagamento!: FormGroup;
  formularioTipoFrete!: FormGroup;
  fretes = ['Normal', 'Rapidão'];
  produto: Produtos[] = [];
  teste = false;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
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
    this.formularioPagamento = this.formBuilder.group({
      numeroCartao: [null, Validators.required],
      nomeTitular: [null, Validators.required],
      codigoSeguranca: [null, Validators.required],
    });

    this.formularioTipoFrete = this.formBuilder.group({
      frete: [null],
    });

    console.log(this.formularioTipoFrete.get('frete'));

    if (this.dataService.getProduto()) {
      this.produto = this.dataService.getProduto();
    }
    console.log(this.produto);
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
