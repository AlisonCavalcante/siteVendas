import { AuthserviceService } from './cadastro/services/authservice.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-vendas';
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthserviceService){
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
