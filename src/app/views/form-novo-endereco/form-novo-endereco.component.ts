import { Endereco } from '../../models/endereco.model';
import { ProdutoService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-novo-endereco',
  templateUrl: './form-novo-endereco.component.html',
  styleUrls: ['./form-novo-endereco.component.css'],
})
export class FormNovoEnderecoComponent implements OnInit {
  formulario!: FormGroup;
  enderecos!: Endereco;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProdutoService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cep: [null, Validators.required],
      rua: [null, Validators.required],
      numeroResidencia: [null, Validators.required],
      complemento: [null],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      uf:[null, Validators.required],
    });
  }

  consultarCep() {
    let cep = this.formulario.get('cep')?.value;
    if (cep != null && cep !== '') {
        this.rersetaDadosForm();
        this.service.consultarCep(cep).subscribe(endereco => {
          this.enderecos = endereco;
          this.popularDadosForm(this.enderecos);
        });
    }
  }

  onSubmit() {
    console.log(this.formulario);
  }
  resetarCampos() {
    this.formulario.reset();
  }
  rersetaDadosForm() {}
  popularDadosForm(endereco: Endereco) {
    console.log(endereco.uf)
    this.formulario.patchValue({
      cidade: endereco.localidade,
      uf: endereco.uf,
      bairro: endereco.bairro,
      complemento: endereco.complemento,
      rua: endereco.logradouro
    });
   }
}
