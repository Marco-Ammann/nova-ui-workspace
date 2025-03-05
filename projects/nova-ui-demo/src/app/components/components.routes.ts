import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'overview', 
    loadComponent: () => import('./overview/overview.component').then(c => c.OverviewComponent)
  },
  { 
    path: 'themes', 
    loadComponent: () => import('./themes/theme-showcase.component').then(c => c.ThemeShowcaseComponent)
  },
  { 
    path: 'buttons', 
    loadComponent: () => import('./buttons/buttons.component').then(c => c.ButtonsComponent)
  },
  { 
    path: 'cards', 
    loadComponent: () => import('./cards/cards.component').then(c => c.CardsComponent)
  },
  { 
    path: 'forms', 
    loadComponent: () => import('./forms/forms.component').then(c => c.FormsComponent)
  },
  { 
    path: 'inputs', 
    loadComponent: () => import('./inputs/inputs.component').then(c => c.InputsComponent)
  },
  { 
    path: 'checkboxes', 
    loadComponent: () => import('./checkboxes/checkboxes.component').then(c => c.CheckboxesComponent)
  },
  { 
    path: 'radio-buttons', 
    loadComponent: () => import('./radio-buttons/radio-buttons.component').then(c => c.RadioButtonsComponent)
  },
  { 
    path: 'toggles', 
    loadComponent: () => import('./toggles/toggles.component').then(c => c.TogglesComponent)
  },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
];