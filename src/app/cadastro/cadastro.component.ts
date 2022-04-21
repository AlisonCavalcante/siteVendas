import { User } from './../models/users.model';
import { DataService } from './../data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuario!: User[];
  @ViewChild('cpfInput') cpfInput!: ElementRef<HTMLInputElement>;
  formulario1!: FormGroup;
  formulario2!: FormGroup;

  constructor(
    private userService: DataService,
    private authService: AuthserviceService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario1 = this.formBuilder.group({
      cpf: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
    });
    this.formulario2 = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
    });
  }
  cadastro() {
    this.route.navigate(['cadastro/criarContaPage']);
  }
  onSubmit() {
    console.log(this.formulario1.value);
    this.userService.getUsuario(this.formulario1.value).subscribe((res) => {
      this.usuario = res;
      if (this.usuario.length != 0) {
        let loginSucess = this.authService.login(
          this.usuario,
          this.formulario1.get('senha')?.value
        );
        if (loginSucess) {
          alert('Usuário logado');
          this.route.navigate(['/']);
        } else {
          alert('Senha incorreta');
          this.resetarCampos();
          this.cpfInput.nativeElement.focus();
        }
      } else {
        alert('Cpf incorreto');
        this.resetarCampos();
        this.cpfInput.nativeElement.focus();
      }
    });
  }
  resetarCampos() {
    this.formulario1.reset();
  }
}
