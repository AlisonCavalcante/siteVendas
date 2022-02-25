import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-endereco-dialog',
  templateUrl: './novo-endereco-dialog.component.html',
  styleUrls: ['./novo-endereco-dialog.component.css']
})
export class NovoEnderecoDialogComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

    })
  }

}
