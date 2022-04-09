import { Subscription } from 'rxjs';
import { DataService } from './../../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.model';
import { Router } from '@angular/router';

@Component({
  selector: 'criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit, OnDestroy {

  formulario!: FormGroup;
  enderecos!: Endereco;
  sub!: Subscription;
  meses: string[] = ["01", "02","03","04","05","06","07","08","09","10","11","12"]
  constructor(private formBuilder: FormBuilder, private userService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.formulario =  this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email ,Validators.required]],
      // sobrenome: [null, Validators.required],
      cpf: [null, [Validators.minLength(11),Validators.required]],
      // cep: [null, Validators.required],
      // cidade: [null, Validators.required],
      // uf: [null, Validators.required],
      // rua: [null, Validators.required],
      senha: [null, [Validators.minLength(6),Validators.required]]
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  obterCep(){
    // let cep = this.formulario.get('cep')?.value;
    // if(cep != null && cep!== ""){
    //   this.service.consultarCep(cep).subscribe(endereco =>{
    //     this.enderecos = endereco;
    //     this.popularDadosForm(this.enderecos);
    //   })
    // }
  }

  cadastrar(){
   this.sub = this.userService.createUser(this.formulario.value).subscribe(value =>{
     alert('Usuário Cadastrado com Sucesso');
     this.router.navigate(['/']);
    })
  }

  resetarCampos(){
    this.formulario.reset();
  }

  popularDadosForm(endereco: Endereco) {
    console.log(endereco.uf)
    this.formulario.patchValue({
      cidade: endereco.localidade,
      uf: endereco.uf,
      rua: endereco.logradouro,
    });
   }
}
