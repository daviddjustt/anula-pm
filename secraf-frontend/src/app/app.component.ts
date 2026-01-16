import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Garanta que isso esteja aqui
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // Nome atualizado
  styleUrl: './app.component.css'     // Nome atualizado
})
export class AppComponent { // Nome mudado de 'App' para 'AppComponent'
  protected readonly title = signal('secraf-frontend');
}
