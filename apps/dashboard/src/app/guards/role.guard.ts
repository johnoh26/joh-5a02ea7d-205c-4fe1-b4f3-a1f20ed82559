import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const allowedRoles: string[] = (route.data && (route.data['roles'] as string[])) || [];
  const token = this.tokenService.getToken();
  const payload = this.tokenService.decodeToken(token ?? undefined);

    if (!payload || !payload.role) {
      // no role present, redirect to login
      this.tokenService.clearToken();
      return this.router.createUrlTree(['/login']);
    }

    // payload.role may be string or array
    const roles = Array.isArray(payload.role) ? payload.role : [payload.role];
  const allowed = allowedRoles.length === 0 || roles.some((r: string) => allowedRoles.includes(r));
    if (!allowed) {
      // not authorized — send to login (or could send to unauthorized page)
      return this.router.createUrlTree(['/login']);
    }

    return true;
  }
}
