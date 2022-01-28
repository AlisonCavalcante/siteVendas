import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css'],
})
export class CestaComprasComponent implements OnInit {

  anos: string[] = ["01", "02","03","04","05","06","07","08","09","10","11","12"]

  constructor() {}

  ngOnInit(): void {}
}
