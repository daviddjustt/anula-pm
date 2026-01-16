import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 bg-white shadow-2xl rounded-xl w-96">
        <h2 class="text-2xl font-bold mb-6 text-center text-blue-800">SECRAF - Login</h2>
        <form (ngSubmit)="onLogin()">
          <div class="mb-4">
            <label class="block text-sm font-medium">E-mail</label>
            <input type="email" [(ngModel)]="user.email" name="email"
                   class="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium">Senha</label>
            <input type="password" [(ngModel)]="user.password" name="password"
                   class="w-full p-2 border rounded mt-1 outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold">
            Entrar
          </button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  // ATENÇÃO: Chaves exatamente iguais ao que o backend espera
  user = { email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
  this.auth.login(this.user).subscribe({
    next: (res) => {
      // O token já foi salvo no localStorage pelo AuthService
      console.log('Login ok! Redirecionando...');
      this.router.navigate(['/requerimento']); // Rota limpa
    },
    error: (err) => alert('Erro de login!')
  });
}
}
