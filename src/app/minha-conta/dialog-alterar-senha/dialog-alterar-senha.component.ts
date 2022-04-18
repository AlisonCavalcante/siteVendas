import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

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
  formSenha!: FormGroup;

  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.formSenha = this.formBuilder.group({
      senhaAtual: [null, Validators.required],
      senhaNova: [null, Validators.required],
      senhaNovaConfirm: [null, Validators.required],
    })
  }
  exibirSenha(){
    this.mostrarSenha = !this.mostrarSenha;
    console.log(this.mostrarSenha)
  }

  cancel(): void{
    this.dialogRef.closeAll();
  }
}
