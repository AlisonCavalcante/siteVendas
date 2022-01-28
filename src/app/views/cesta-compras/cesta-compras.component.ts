import { DialogAlterarEnderecoComponent } from './../../components/dialog-alterar-endereco/dialog-alterar-endereco.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css'],
})
export class CestaComprasComponent implements OnInit {

  anos: string[] = ["01", "02","03","04","05","06","07","08","09","10","11","12"]

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAlterarEnderecoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {}
}
