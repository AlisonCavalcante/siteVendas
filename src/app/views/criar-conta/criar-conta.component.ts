import { ProdutoService } from 'src/app/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/components/endereco.model';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  formulario!: FormGroup;
  enderecos!: Endereco;

  constructor(private formBuilder: FormBuilder, private service: ProdutoService) { }

  ngOnInit(): void {
    this.formulario =  this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      cep: [null, Validators.required],
      cidade: [null, Validators.required],
      uf: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  obterCep(){
    let cep = this.formulario.get('cep')?.value;
    if(cep != null && cep!== ""){
      this.service.consultarCep(cep).subscribe(endereco =>{
        this.enderecos = endereco;
        this.popularDadosForm(this.enderecos);
      })
    }
  }

  onSubmit(){

  }

  resetarCampos(){
    this.formulario.reset();
  }

  popularDadosForm(endereco: Endereco) {
    console.log(endereco.uf)
    this.formulario.patchValue({
      cidade: endereco.localidade,
      uf: endereco.uf,
    });
   }
}
