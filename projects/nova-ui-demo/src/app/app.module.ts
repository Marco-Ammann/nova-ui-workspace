// projects/nova-ui-demo/src/app/app.module.ts or app.config.ts (for standalone apps)

import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter([/* your routes */])
  ]
};