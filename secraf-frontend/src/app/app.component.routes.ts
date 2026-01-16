import { Routes } from '@angular/router';
import { RequerimentoFormComponent } from './components/requerimento-form/requerimento-form.component';
import { LoginComponent } from '../app/components/login/login.component'; // Certifique-se de que o caminho está correto

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'requerimento/:uuid',
    component: RequerimentoFormComponent
  }
];
