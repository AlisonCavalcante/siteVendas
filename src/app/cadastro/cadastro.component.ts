import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario1!: FormGroup;
  formulario2!: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario1 = this.formBuilder.group({
      login: [null, [Validators.email,Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
    this.formulario2 = this.formBuilder.group({
      email: [null, [Validators.email,Validators.required]]
    })
  }
  cadastro(){
    this.route.navigate(["cadastro/criarContaPage"])
  }
  onSubmit(){

  }

}
