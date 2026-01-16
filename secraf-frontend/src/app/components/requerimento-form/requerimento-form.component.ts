import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; // Adicionado Router e ActivatedRoute
import { ApiService } from '../../services/api.service';
import { Arma } from '../../models/types';

@Component({
  selector: 'app-requerimento-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './requerimento-form.component.html'
})
export class RequerimentoFormComponent implements OnInit {

  userUuid: string | null = null;
  listaArmas: Arma[] = [];

  dados = {
    rg: '',
    orgao_expedidor: '',
    uf: '',
    data_emissao: '',
    tipo_transferencia: '',
    telefone: '',
    email: '',
    fornecedor: '',
    armas: [] as string[]
  };

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.carregarArmas();
  }

  carregarArmas(): void {
    this.apiService.getMinhasArmas().subscribe({
      next: (res: Arma[]) => { // Tipagem adicionada aqui
        this.listaArmas = res;
      },
      error: (err: any) => { // Tipagem adicionada aqui
        console.error('Erro ao carregar armas:', err);
      }
    });
  }
  toggleArma(id: string): void {
    const index = this.dados.armas.indexOf(id);
    if (index > -1) {
      this.dados.armas.splice(index, 1);
    } else {
      this.dados.armas.push(id);
    }
  }

  enviar(): void {
    const url = 'http://localhost:8000/api/requerimentos/requerimentos/';

    // Garantimos que o array de armas não está vazio antes de enviar
    if (this.dados.armas.length === 0) {
      alert('Por favor, selecione ao menos uma arma.');
      return;
    }

    console.log('Enviando dados para o servidor:', this.dados);

    this.http.post(url, this.dados).subscribe({
      next: (res) => {
        alert('Requerimento enviado com sucesso!');
        this.limparFormulario();
      },
      error: (err) => {
        console.error('Erro detalhado do servidor:', err);
        alert('Erro ao enviar requerimento. Verifique os campos ou o console.');
      }
    });
  }

  limparFormulario(): void {
    this.dados = {
      rg: '',
      orgao_expedidor: '',
      uf: '',
      data_emissao: '',
      tipo_transferencia: '',
      telefone: '',
      email: '',
      fornecedor: '',
      armas: []
    };
  }
}
