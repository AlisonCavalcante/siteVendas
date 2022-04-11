import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-alterar-senha',
  templateUrl: './dialog-alterar-senha.component.html',
  styleUrls: ['./dialog-alterar-senha.component.css']
})
export class DialogAlterarSenhaComponent implements OnInit {

  mostrarSenha: boolean = false;
  data = {
    password: '',
    password_confirm: '',
  };
  constructor() { }

  ngOnInit(): void {
  }
  exibirSenha(){
    this.mostrarSenha = !this.mostrarSenha;
    console.log(this.mostrarSenha)
  }

}
