import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.component.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const token = localStorage.getItem('access_token');
          const isLoginUrl = req.url.includes('/api/token/');

          // Se tivermos token e não for a rota de login, anexa o Header Bearer
          if (token && !isLoginUrl) {
            req = req.clone({
              setHeaders: { Authorization: `Bearer ${token}` },
              withCredentials: true
            });
          } else {
            req = req.clone({ withCredentials: true });
          }
          return next(req);
        }
      ])
    )
  ]
};
