import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = '/api/auth';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token?: string; [key: string]: any }>(`${this.base}/login`, { email, password }).pipe(
      tap((res) => {
        const token = res?.token;
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.base}/register`, { username, email, password });
  }

  profile(): Observable<any> {
    return this.http.get(`${this.base}/profile`);
  }

  // Logout: call server to clear HttpOnly cookie. Server should respond by clearing cookie
  // (e.g. res.clearCookie('token', ...)). Include withCredentials so browser will send and accept cookies.
  logout(): Observable<any> {
    return this.http.post(`${this.base}/logout`, {}, { withCredentials: true });
  }
}
