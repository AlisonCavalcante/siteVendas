import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }
  cadastro(){
    this.route.navigate(["cadastro/criarContaPage"])
  }
  onSubmit(){

  }

}
