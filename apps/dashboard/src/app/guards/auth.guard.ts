import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = this.tokenService.getToken();
    if (!token || this.tokenService.isTokenExpired(token)) {
      // clear any invalid token and redirect to login
      this.tokenService.clearToken();
      return this.router.createUrlTree(['/login']);
    }
    return true;
  }
}
