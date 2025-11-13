import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  content: string;
  status: string;
  owner?: string;
  priority?: string;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private base = '/api/tasks';
  constructor(private http: HttpClient) {}

  getAll(userId?: string): Observable<Task[]> {
    let params = new HttpParams();
    if (userId) {
      params = params.set('userId', userId);
    }
    return this.http.get<Task[]>(this.base, { params });
  }

  get(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.base}/${id}`);
  }

  create(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.base, task);
  }

  update(id: number, task: Partial<Task>): Observable<any> {
    return this.http.put(`${this.base}/${id}`, task);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
