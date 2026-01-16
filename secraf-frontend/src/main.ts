import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.component.config';
import { AppComponent } from './app/app.component'; // Agora ele vai achar!

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
