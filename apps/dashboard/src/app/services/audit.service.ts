import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Audit {
  id?: number;
  action?: string;
  actor?: string;
  timestamp?: string;
  details?: any;
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private base = '/api/Audits';
  constructor(private http: HttpClient) {}

  getAuditLog(): Observable<Audit[]> {
    return this.http.get<Audit[]>(`${this.base}/audit-log`);
  }
}
