import { ProdutoService } from 'src/app/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-novo-endereco-dialog',
  templateUrl: './novo-endereco-dialog.component.html',
  styleUrls: ['./novo-endereco-dialog.component.css']
})
export class NovoEnderecoDialogComponent implements OnInit {
  enderecos!: Endereco;
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProdutoService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeEndereco: [null, Validators.required],
      cep: [null, Validators.required],
      nomeDestinatario: [null, Validators.required],
      endereco: [null, Validators.required],
      numeroCasa: [null, Validators.required],
      complemento: [null],
      bairro: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      pontoDeReferencia: [null],
    })
  }
  consultarCep() {
    let cep = this.formulario.get('cep')?.value;
    if (cep != null && cep !== '') {
        this.service.consultarCep(cep).subscribe(endereco => {
          this.enderecos = endereco;
          this.popularDadosForm(this.enderecos);
        });
    }
  }
  onSubmit(){
    console.log(this.formulario);
  }
  popularDadosForm(endereco: Endereco) {
    console.log(endereco.uf)
    this.formulario.patchValue({
      cidade: endereco.localidade,
      estado: endereco.uf,
      bairro: endereco.bairro,
      complemento: endereco.complemento,
      endereco: endereco.logradouro
    });
   }
}
