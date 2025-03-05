import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'components/overview', pathMatch: 'full' },
  { 
    path: 'components', 
    loadChildren: () => import('./components/components.routes').then(m => m.routes) 
  }
];