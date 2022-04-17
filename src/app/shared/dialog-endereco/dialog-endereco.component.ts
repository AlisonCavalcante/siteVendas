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
  @Input('indexEndereco') public indexEndereco!: number;

  constructor(private userService: DataService,private service: ProdutoService ,private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    console.log(this.flag)
    console.log(this.indexEndereco)
    this.user = this.userService.getCurrentUser();

    if(!this.flag){
      this.formulario = this.formBuilder.group({
        cep: [null, Validators.required],
        logradouro: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        uf: [null, Validators.required],
        localidade: [null, Validators.required],
        complemento: ["",],
      })
    }else{
      this.formulario = this.formBuilder.group({
        cep: [this.user[0].endereco[this.indexEndereco].cep, Validators.required],
        logradouro: [this.user[0].endereco[this.indexEndereco].logradouro, Validators.required],
        numero: [this.user[0].endereco[this.indexEndereco].numeroResidencia, Validators.required],
        bairro: [this.user[0].endereco[this.indexEndereco].bairro, Validators.required],
        uf: [this.user[0].endereco[this.indexEndereco].uf, Validators.required],
        localidade: [this.user[0].endereco[this.indexEndereco].localidade, Validators.required],
        complemento: ["",],
      })
    }

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
      this.user[0].endereco[this.indexEndereco] = this.formulario.value;
      this.userService.updateUser(this.user).subscribe(res =>{
        console.log(res);
        this.userService.updateCurrentUSer(this.user);
      })
    }else{
      this.user[0].endereco.push(this.formulario.value);
      this.userService.updateUser(this.user).subscribe(res =>{
        console.log(res);
        this.userService.updateCurrentUSer(this.user);
      })
    }


   }

}
