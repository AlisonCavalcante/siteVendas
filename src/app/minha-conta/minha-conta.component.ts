import { AuthserviceService } from './../cadastro/services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }

}
