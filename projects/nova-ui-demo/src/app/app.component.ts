// app.component.ts - UPDATED WITH CONSISTENT IMPORTS
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  NovaButtonComponent,
  NovaThemeTogglerComponent,
  NovaCardComponent,
  NovaCardHeaderComponent, 
  NovaCardContentComponent, 
  NovaCardFooterComponent,
  NovaInputComponent,
  NovaCheckboxComponent,
  NovaRadioButtonComponent,
  NovaToggleComponent
} from 'nova-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NovaButtonComponent,
    NovaThemeTogglerComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaCardFooterComponent,
    NovaInputComponent,
    NovaCheckboxComponent,
    NovaRadioButtonComponent,
    NovaToggleComponent
  ]
})
export class AppComponent {
  title = 'Nova UI Demo';
  userName = '';
  email = '';
  
  // Form control states
  termsAccepted = false;
  notifications = true;
  newsletter = false;
  themePreference = 'dark';
  darkMode = true;
  notificationsToggle = true;
  soundEnabled = false;
}