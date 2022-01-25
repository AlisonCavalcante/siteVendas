import { Produtos } from './../../components/produtos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eletronicos-page',
  templateUrl: './eletronicos-page.component.html',
  styleUrls: ['./eletronicos-page.component.css']
})
export class EletronicosPageComponent implements OnInit {

  selectedValue: string = "";
  categorias: any[] = [
    {tipo: 'Eletrônico' },
    {tipo: 'Eletrodomésticos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
