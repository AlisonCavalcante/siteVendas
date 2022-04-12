import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogAlterarSenhaComponent } from './../dialog-alterar-senha/dialog-alterar-senha.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/users.model';
import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { DialogAlterarEmailComponent } from '../dialog-alterar-email/dialog-alterar-email.component';

@Component({
  selector: 'app-minha-conta-dados',
  templateUrl: './minha-conta-dados.component.html',
  styleUrls: ['./minha-conta-dados.component.css']
})
export class MinhaContaDadosComponent implements OnInit {

  user!: User[];
  formulario!: FormGroup;

  constructor(private dialog: MatDialog,private userService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  this.user = this.userService.getUser();
  console.log(this.user)

  this.formulario = this.formBuilder.group({
    nome: [this.user[0].nome, Validators.required]
  })
  }
  submit(){
    this.user[0].nome = this.formulario.get('nome')?.value
    this.userService.updateUser(this.user[0]).subscribe(res => {
      console.log(res)
    })
  }

  openDialog(dialog: string){
    if(dialog === 'email'){
      this.dialog.open(DialogAlterarEmailComponent);
    }else if(dialog === 'senha')
    this.dialog.open(DialogAlterarSenhaComponent);
  }
}
