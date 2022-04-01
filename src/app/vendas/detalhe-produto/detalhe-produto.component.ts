import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  panelOpenState = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  comprar(){
    this.route.navigate(["/cesta"]);
  }

}
