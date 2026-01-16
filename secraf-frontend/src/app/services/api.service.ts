import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arma } from '../models/types'; // Verifique se o caminho do seu model está correto

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/armamentos/armamentos/';

  constructor(private http: HttpClient) { }

  // Adicione este método exatamente com este nome
  getMinhasArmas(): Observable<Arma[]> {
    return this.http.get<Arma[]>(this.apiUrl);
  }
}
