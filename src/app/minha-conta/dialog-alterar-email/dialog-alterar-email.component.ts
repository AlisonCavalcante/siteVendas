import { FormValidations } from './../../shared/form-validations';
import { DataService } from 'src/app/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-dialog-alterar-email',
  templateUrl: './dialog-alterar-email.component.html',
  styleUrls: ['./dialog-alterar-email.component.css']
})
export class DialogAlterarEmailComponent implements OnInit {

  data = {
    email: '',
    email_confirm: '',
  };
  formEmail!: FormGroup;
  user!: User[];

  constructor(public dialoRef: MatDialog, private userService: DataService ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.user = this.userService.getCurrentUser();

    this.formEmail = this.formBuilder.group({
      emailAtual: [this.user[0].email],
      emailNovo: [null, [Validators.required, Validators.email]],
      emailNovoConfirm: [null, [Validators.required, Validators.email, FormValidations.equalsto('emailNovo')]]
    })
  }

  cancel(): void{
    this.dialoRef.closeAll();
  }
}
