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

  carregarArmas() {
    this.apiService.getMinhasArmas().subscribe({
      next: (res) => {
        console.log('Dados recebidos:', res); // <--- OLHE O CONSOLE DO NAVEGADOR
        this.listaArmas = res || []; // Proteção contra null
      },
      error: (err) => {
        console.error('Erro:', err);
        // Fallback para teste (apague depois)
        this.listaArmas = [];
      }
    });
  }

  toggleArma(id: string): void {
    // 1. Verificar se o ID existe
    if (!id) return;

    // 2. Criar uma cópia do array para forçar o Angular a detectar a mudança
    const armasSelecionadas = [...this.dados.armas];

    const index = armasSelecionadas.indexOf(id);

    if (index > -1) {
      // Se já existe, remove
      armasSelecionadas.splice(index, 1);
      console.log('Removendo arma ID:', id);
    } else {
      // Se não existe, adiciona
      armasSelecionadas.push(id);
      console.log('Adicionando arma ID:', id);
    }

    // 3. Atribuir a cópia de volta ao objeto principal
    this.dados.armas = armasSelecionadas;

    console.log('Lista de IDs atualizada:', this.dados.armas);
  }


  enviar(): void {
    if (this.dados.armas.length === 0) {
      alert('Selecione pelo menos uma arma para o requerimento.');
      return;
    }

    const url = 'http://localhost:8000/api/requerimentos/requerimentos/';

    // O objeto 'this.dados' já contém o array 'armas' com os IDs selecionados
    this.http.post(url, this.dados).subscribe({
      next: (res) => {
        alert('Requerimento criado e armas vinculadas com sucesso!');
        this.limparFormulario();
      },
      error: (err) => alert('Erro ao salvar requerimento.')
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
