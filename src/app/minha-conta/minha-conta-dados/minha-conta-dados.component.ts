import { DataService } from 'src/app/data.service';
import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogAlterarSenhaComponent } from '../dialog-alterar-senha/dialog-alterar-senha.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/users.model';
import { Component, OnInit } from '@angular/core';
import { DialogAlterarEmailComponent } from '../dialog-alterar-email/dialog-alterar-email.component';

@Component({
  selector: 'app-minha-conta-dados',
  templateUrl: './minha-conta-dados.component.html',
  styleUrls: ['./minha-conta-dados.component.css'],
})
export class MinhaContaDadosComponent implements OnInit {
  user!: User[];
  formularioDadosPessoais!: FormGroup;
  formularioDadosAcesso!: FormGroup;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private userService: DataService,
    private authService: AuthserviceService,
    private formBuilder: FormBuilder
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    this.formularioDadosPessoais = this.formBuilder.group({
      nome: [this.user[0].nome, Validators.required],
      cpf: [this.user[0].cpf, Validators.required],
    });
    this.formularioDadosAcesso = this.formBuilder.group({
      email: [this.user[0].email, Validators.required],
    });
  }
  submit() {
    // this.user[0].nome = this.formularioDadosPessoais.get('nome')?.value
    // this.userService.updateUser(this.user[0]).subscribe(res => {
    //   alert('Usuário Atualizado com sucesso');
    // })
  }

  openDialog(dialog: string) {
    if (dialog === 'email') {
      this.dialog.open(DialogAlterarEmailComponent);
    } else if (dialog === 'senha')
      this.dialog.open(DialogAlterarSenhaComponent);
  }
}
