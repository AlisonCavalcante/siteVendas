import { AuthserviceService } from './../../cadastro/services/authservice.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService, private router: Router){}

  canActivate(): boolean{
    this.authService.updateLoggedIn();
    if(localStorage.getItem('User')){
      console.log('guarda true');
      return true;
    }else{
      console.log('guarda false');
      this.router.navigate(['/cesta'])
      return false;
    }
  }

}
