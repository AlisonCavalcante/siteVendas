import { User } from 'src/app/models/users.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private usuario!: User[];
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  login(user: User[]) {
    localStorage.setItem('User', JSON.stringify(user));
    this.updateLoggedIn();
  }

  logout(): void {
    localStorage.clear();
    this.updateLoggedIn();
  }

  updateLoggedIn(): void {
    const user = localStorage.getItem('User');
    if (user) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

  getCurrentUser(): User[] {
    let currentUser = localStorage.getItem('User');
    if (currentUser) {
      this.usuario = JSON.parse(currentUser);
    }
    return this.usuario;
  }
}
