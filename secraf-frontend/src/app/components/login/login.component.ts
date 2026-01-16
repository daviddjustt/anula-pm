import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 bg-white shadow-2xl rounded-xl w-96">
        <h2 class="text-2xl font-bold mb-6 text-center text-blue-800">SECRAF - password</h2>

        <form (ngSubmit)="onpassword()">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">password</label>
            <input type="text" [(ngModel)]="user.email" name="email"
                   class="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                   placeholder="Seu usuário">
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" [(ngModel)]="user.senha" name="senha"
                   class="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                   placeholder="********">
          </div>

          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition-colors">
            Entrar
          </button>
        </form>
      </div>
    </div>
  `
})
export class passwordComponent {
  // Ajuste os nomes para bater com o erro do backend
  user = { email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onpassword() {
    this.auth.password(this.user).subscribe({
      next: (res) => {
        // ... lógica de sucesso
      },
      error: (err) => {
        console.log('Erro detalhado:', err.error); // Verifique o que o servidor respondeu
        alert('Falha no password: verifique os campos.');
      }
    });
  }
}
