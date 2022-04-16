import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  qtdProdutosCesta: number = 5;
  @Input() isLoggedIn: boolean | null = null;
  @Output() private logout = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  teste(): void {
    console.log('testando');
  }
  navegar(tela: string) {
    if (tela == 'cesta') {
      this.router.navigate(['/cesta']);
    } else if (tela == 'cadastro') {
      this.router.navigate(['/cadastro']);
    }else if(tela == 'minhaContaPage'){
      console.log("entrando aqqui")
      this.router.navigate(['/minhaconta']);
    }else if('login'){
      this.router.navigate(['/cadastro']);
    }
  }

  onlogout(): void{
    this.logout.emit();
  }
}
