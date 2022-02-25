import { NovoEnderecoDialogComponent } from './../novo-endereco-dialog/novo-endereco-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-minha-conta-enderecos',
  templateUrl: './minha-conta-enderecos.component.html',
  styleUrls: ['./minha-conta-enderecos.component.css']
})
export class MinhaContaEnderecosComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(NovoEnderecoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
