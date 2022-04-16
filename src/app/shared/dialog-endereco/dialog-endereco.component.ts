import { Endereco } from './../../models/endereco.model';
import { ProdutoService } from './../../service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-dialog-endereco',
  templateUrl: './dialog-endereco.component.html',
  styleUrls: ['./dialog-endereco.component.css']
})
export class DialogEnderecoComponent implements OnInit {

  formulario!: FormGroup;
  user!: User[];
  enderecos!: Endereco;
  @Input('flag') public flag!: boolean;

  constructor(private userService: DataService,private service: ProdutoService ,private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    console.log(this.flag)
    this.user = this.userService.getCurrentUser();

    this.formulario = this.formBuilder.group({
      cep: [this.user[0].endereco.cep, Validators.required],
      logradouro: [this.user[0].endereco.logradouro, Validators.required],
      numero: [this.user[0].endereco.numeroResidencia, Validators.required],
      bairro: [this.user[0].endereco.bairro, Validators.required],
      uf: [this.user[0].endereco.uf, Validators.required],
      localidade: [this.user[0].endereco.localidade, Validators.required],
      complemento: ["",],
    })

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
  rersetaDadosForm(){
    this.formulario.reset();
  }
  popularDadosForm(endereco: Endereco) {
    console.log(endereco.uf)
    this.formulario.patchValue({
      cep: endereco.cep,
      localidade: endereco.localidade,
      uf: endereco.uf,
    });
   }

   onSubmit(){
    if(this.flag){
      this.user[0].endereco = this.formulario.value;
      this.userService.updateUser(this.user).subscribe(res =>{
        console.log(res);
        this.userService.updateCurrentUSer(this.user);
      })
    }else{
      console.log('Salvar novo endereço')
    }


   }

}
