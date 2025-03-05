import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  NovaButtonComponent,
  NovaThemeTogglerComponent,
  NovaInputComponent,
  NovaCheckboxComponent,
  NovaToggleComponent,
  NovaThemeService,
  NovaThemeBase
} from 'nova-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaButtonComponent,
    NovaThemeTogglerComponent,
    NovaInputComponent,
    NovaCheckboxComponent,
    NovaToggleComponent
  ]
})
export class AppComponent {
  title = 'Nova UI - Button Demo';
  loadingDemo = false;
  
  // Button demo states
  loadingStates: { [key: string]: boolean } = {
    basic: false,
    cta: false,
    link: false
  };
  
  // Form control states
  userName = '';
  email = '';
  termsAccepted = false;
  notifications = true;
  newsletter = false;
  themePreference = 'dark';
  notificationsToggle = true;
  
  constructor(private themeService: NovaThemeService) {}
  
  toggleLoading(key: string): void {
    this.loadingStates[key] = true;
    setTimeout(() => {
      this.loadingStates[key] = false;
    }, 2000);
  }
  
  setTheme(theme: NovaThemeBase): void {
    this.themeService.setThemeBase(theme);
  }
}