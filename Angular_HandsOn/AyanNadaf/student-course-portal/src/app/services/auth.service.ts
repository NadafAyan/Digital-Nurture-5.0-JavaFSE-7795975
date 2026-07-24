import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInFlag = true;

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }

  login(): void {
    this.isLoggedInFlag = true;
  }

  logout(): void {
    this.isLoggedInFlag = false;
  }
}
