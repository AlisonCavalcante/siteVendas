import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-dialog-endereco',
  templateUrl: './dialog-endereco.component.html',
  styleUrls: ['./dialog-endereco.component.css']
})
export class DialogEnderecoComponent implements OnInit {

  formulario!: FormGroup;
  user!: User[];

  constructor(private userService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.user = this.userService.getUser();
    console.log(this.user[0].endereco.cep)


    this.formulario = this.formBuilder.group({
      cep: [this.user[0].endereco.cep, Validators.required],
      logradouro: [this.user[0].endereco.logradouro, Validators.required],
      numero: [this.user[0].endereco.numeroResidencia, Validators.required],
      bairro: [this.user[0].endereco.bairro, Validators.required],
      uf: [this.user[0].endereco.uf, Validators.required],
      localidade: [this.user[0].endereco.localidade, Validators.required],
    })

  }

}
