import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/token/';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    // credentials deve conter { email: '...', password: '...' }
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(res => {
        if (res.access) {
          localStorage.setItem('access_token', res.access);
          localStorage.setItem('refresh_token', res.refresh);
        }
      })
    );
  }
}
