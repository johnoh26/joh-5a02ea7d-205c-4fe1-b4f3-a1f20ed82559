import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  username?: string;
  email?: string;
  role?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private base = '/api/users';
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.base);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.base}/${id}`);
  }

  create(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.base, user);
  }

  update(id: number, user: Partial<User>): Observable<any> {
    return this.http.put(`${this.base}/${id}`, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
