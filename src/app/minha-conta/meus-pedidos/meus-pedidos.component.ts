import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  user!: User[];
  constructor(private userService: DataService) { }

  ngOnInit(): void {
   this.user = this.userService.getCurrentUser();
  }

}
