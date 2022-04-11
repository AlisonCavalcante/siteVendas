import { MatDialog } from '@angular/material/dialog';
import { User } from './../../models/users.model';
import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { DialogAlterarEmailComponent } from '../dialog-alterar-email/dialog-alterar-email.component';

@Component({
  selector: 'app-minha-conta-dados',
  templateUrl: './minha-conta-dados.component.html',
  styleUrls: ['./minha-conta-dados.component.css']
})
export class MinhaContaDadosComponent implements OnInit {

  user!: User;
;

  constructor(private dialog: MatDialog,private userService: DataService) { }

  ngOnInit(): void {
  this.user = this.userService.getUser();
  console.log(this.user)
  }
  openDialogEmail(){
    this.dialog.open(DialogAlterarEmailComponent);
  }
}
