import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arma, Requerimento } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Busca armas do usuário logado (aquele endpoint que criamos no Django)
  getArmasPorUsuario(userUuid: string): Observable<Arma[]> {
    const url = `http://localhost:8000/api/armamentos/armamentos/por_usuario/${userUuid}/`;
    return this.http.get<Arma[]>(url);
  }

  // Salva o requerimento enviando o usuário logado (via token) e a lista de IDs de armas
  salvarRequerimento(dados: Requerimento): Observable<Requerimento> {
    return this.http.post<Requerimento>(`${this.API_URL}/requerimentos/`, dados);
  }
}
