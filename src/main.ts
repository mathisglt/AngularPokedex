import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/components/app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
