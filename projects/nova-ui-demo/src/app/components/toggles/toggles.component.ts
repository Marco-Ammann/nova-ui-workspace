import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { NovaToggleComponent, NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaToggleComponent,
    NovaButtonComponent
  ],
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.scss']
})
export class TogglesComponent {
  // Basic toggle state
  notificationsEnabled = true;
  darkModeEnabled = true;
  soundEnabled = false;
  
  // Disabled toggles
  disabledUncheckedToggle = false;
  disabledCheckedToggle = true;
  
  // Toggle with label positions
  labelBeforeToggle = true;
  labelAfterToggle = true;
  
  // Toggle with hints
  autoSaveEnabled = true;
  locationTrackingEnabled = false;
  
  // Reactive form
  settingsForm: FormGroup;
  
  // Toggle settings
  privacySettings = [
    { id: 'cookies', label: 'Allow cookies', hint: 'Enables site functionality and personalization' },
    { id: 'analytics', label: 'Allow analytics', hint: 'Helps us improve our website' },
    { id: 'marketing', label: 'Allow marketing', hint: 'Enables personalized recommendations' },
    { id: 'thirdParty', label: 'Allow third-party sharing', hint: 'Shares data with trusted partners' }
  ];
  
  constructor(private fb: FormBuilder) {
    // Initialize reactive form
    this.settingsForm = this.fb.group({
      cookies: [true],
      analytics: [true],
      marketing: [false],
      thirdParty: [false]
    });
  }
  
  // Save settings from reactive form
  saveSettings(): void {
    console.log('Settings saved:', this.settingsForm.value);
    // Show success message or perform additional actions
  }
  
  // Reset settings to default
  resetSettings(): void {
    this.settingsForm.reset({
      cookies: true,
      analytics: true,
      marketing: false,
      thirdParty: false
    });
  }
}