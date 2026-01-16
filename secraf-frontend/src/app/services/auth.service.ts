import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:8000/api/token/';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(this.API_URL, credentials).pipe(
      tap((res: any) => {
        // Salva o token de acesso no navegador
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
      })
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.clear();
  }
}
