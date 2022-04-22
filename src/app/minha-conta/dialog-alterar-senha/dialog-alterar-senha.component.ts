import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { FormValidations } from './../../shared/form-validations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-alterar-senha',
  templateUrl: './dialog-alterar-senha.component.html',
  styleUrls: ['./dialog-alterar-senha.component.css'],
})
export class DialogAlterarSenhaComponent implements OnInit {
  mostrarSenha: boolean = false;
  data = {
    password: '',
    password_confirm: '',
  };
  formSenha!: FormGroup;
  senhaValida!: boolean;
  constructor(
    private authService: AuthserviceService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.formSenha = this.formBuilder.group({
      senhaAtual: [null, [Validators.required, Validators.minLength(6)]],
      senhaNova: [null, [Validators.required, Validators.minLength(6)]],
      senhaNovaConfirm: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          FormValidations.equalsto('senhaNova'),
        ],
      ],
    });
  }
  exibirSenha() {
    this.mostrarSenha = !this.mostrarSenha;
    console.log(this.mostrarSenha);
  }
  alterarSenha() {
    this.senhaValida = this.authService.alterarSenha(
      this.formSenha.get('senhaAtual')?.value
    );
    if (this.senhaValida) this.dialogRef.closeAll();
    alert('Senha Alterada com Sucesso');
  }
  cancel(): void {
    this.dialogRef.closeAll();
  }
}
