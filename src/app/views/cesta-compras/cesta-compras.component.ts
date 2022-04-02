import { DataService } from './../../data.service';
import { Produtos } from './../../components/produtos.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogAlterarEnderecoComponent } from './../../components/dialog-alterar-endereco/dialog-alterar-endereco.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css'],
})
export class CestaComprasComponent implements OnInit {

  meses: string[] = ["01", "02","03","04","05","06","07","08","09","10","11","12"]
  formularioPagamento!: FormGroup;
  produto!: Produtos[];

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {

    let result = this.router.getCurrentNavigation();
    console.log(result?.extras.state);

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAlterarEnderecoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.formularioPagamento = this.formBuilder.group({
      numeroCartao: [null, Validators.required],
      nomeTitular: [null, Validators.required],
      codigoSeguranca: [null, Validators.required],
    });

    console.log(this.dataService.getProduto());

  }
  onSubmit(){}
}
