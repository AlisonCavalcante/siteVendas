import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/users.model';
import { DialogEnderecoComponent } from 'src/app/shared/dialog-endereco/dialog-endereco.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-minha-conta-enderecos',
  templateUrl: './minha-conta-enderecos.component.html',
  styleUrls: ['./minha-conta-enderecos.component.css']
})
export class MinhaContaEnderecosComponent implements OnInit {

  user!: User[];
  isLoggedIn$!: Observable<boolean>;

  constructor(public dialog: MatDialog, private authService: AuthserviceService ,private userService: DataService) {
    this.isLoggedIn$ =  this.authService.isLoggedIn$;
   }

  ngOnInit(): void {

    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogEnderecoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
