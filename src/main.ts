// @ts-ignore
import { enableProdMode } from '@angular/core';
// @ts-ignore
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  // @ts-ignore
  .catch(err => console.error(err));
