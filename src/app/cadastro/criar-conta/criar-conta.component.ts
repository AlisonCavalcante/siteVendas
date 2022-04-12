import { User } from './../../models/users.model';
import { Subscription } from 'rxjs';
import { DataService } from './../../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.model';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service.service';

@Component({
  selector: 'criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css'],
})
export class CriarContaComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  enderecos!: Endereco;
  sub!: Subscription;
  meses: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  constructor(
    private formBuilder: FormBuilder,
    private userService: DataService,
    private router: Router,
    private service: ProdutoService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      cpf: [null, [Validators.minLength(11), Validators.required]],
      senha: [null, [Validators.minLength(6), Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        logradouro: [null, Validators.required],
        numeroResidencia: [null, Validators.required],
        complemento: [null, Validators.required],
        bairro: [null, Validators.required],
        localidade: [null, Validators.required],
        uf: [null, Validators.required],
      }),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  obterCep() {
    let cep = this.formulario.get('endereco.cep')?.value;
    if (cep != null && cep !== '') {
      this.service.consultarCep(cep).subscribe((endereco) => {
        this.enderecos = endereco;
        this.popularDadosForm(this.enderecos);
      });
    }
  }

  cadastrar() {
    console.log(this.formulario.value);
    this.sub = this.userService
      .getUsuario(this.formulario.value)
      .subscribe((value) => {
        if (value) {
          alert('Usuáio já existe, cadastrar novamente.');
          this.resetarCampos();
        } else {
          console.log('usuário novo');
          this.userService
            .createUser(this.formulario.value)
            .subscribe((value) => {
              this.userService.setUser(this.formulario.value);
              alert('Usuário Cadastrado com Sucesso');
              this.router.navigate(['/']);
            });
        }
      });
  }

  resetarCampos() {
    this.formulario.reset();
  }

  popularDadosForm(endereco: Endereco) {
    this.formulario.patchValue({
      endereco,localidade: endereco.localidade,
      uf: endereco.uf,
    });
  }
}
