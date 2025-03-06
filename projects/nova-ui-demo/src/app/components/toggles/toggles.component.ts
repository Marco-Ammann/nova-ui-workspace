import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { 
  NovaToggleComponent, 
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaCardFooterComponent
} from 'nova-ui';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaToggleComponent,
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaCardFooterComponent
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Toggles</h1>
      <p class="component-description">
        Interactive switch controls with cosmic-styled animations and effects
      </p>
      
      <!-- Basic Toggles -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Basic Toggles"></nova-card-header>
          <nova-card-content>
            <div class="toggle-group">
              <nova-toggle 
                label="Enable notifications" 
                [(ngModel)]="notificationsEnabled">
              </nova-toggle>
              
              <nova-toggle 
                label="Enable dark mode" 
                [(ngModel)]="darkModeEnabled">
              </nova-toggle>
              
              <nova-toggle 
                label="Enable sound effects" 
                [(ngModel)]="soundEnabled">
              </nova-toggle>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Toggle States"></nova-card-header>
          <nova-card-content>
            <div class="toggle-group">
              <nova-toggle
                label="Default toggle (on)"
                [(ngModel)]="defaultToggleOn">
              </nova-toggle>
              
              <nova-toggle
                label="Default toggle (off)"
                [(ngModel)]="defaultToggleOff">
              </nova-toggle>
              
              <nova-toggle
                label="Disabled toggle (off)"
                [(ngModel)]="disabledUncheckedToggle"
                [disabled]="true">
              </nova-toggle>
              
              <nova-toggle
                label="Disabled toggle (on)"
                [(ngModel)]="disabledCheckedToggle"
                [disabled]="true">
              </nova-toggle>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Toggle Variants -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="With Hints"></nova-card-header>
          <nova-card-content>
            <div class="toggle-group">
              <nova-toggle
                label="Enable auto-save"
                hint="Automatically saves your work every 5 minutes"
                [(ngModel)]="autoSaveEnabled">
              </nova-toggle>
              
              <nova-toggle
                label="Enable location tracking"
                hint="Allows the app to access your location for better recommendations"
                [(ngModel)]="locationTrackingEnabled">
              </nova-toggle>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Label Position"></nova-card-header>
          <nova-card-content>
            <div class="toggle-group">
              <nova-toggle
                label="Label after toggle (default)"
                labelPosition="after"
                [(ngModel)]="labelAfterToggle">
              </nova-toggle>
              
              <nova-toggle
                label="Label before toggle"
                labelPosition="before"
                [(ngModel)]="labelBeforeToggle">
              </nova-toggle>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Reactive Forms Integration -->
      <nova-card>
        <nova-card-header title="Form Integration"></nova-card-header>
        <nova-card-content>
          <form [formGroup]="settingsForm" class="settings-form">
            <div class="toggle-section">
              <h3 class="section-subtitle">Privacy Settings</h3>
              
              <div class="toggle-group">
                <nova-toggle
                  *ngFor="let setting of privacySettings"
                  [label]="setting.label"
                  [hint]="setting.hint"
                  [formControlName]="setting.id">
                </nova-toggle>
              </div>
            </div>
            
            <div class="toggle-section">
              <h3 class="section-subtitle">Communication Preferences</h3>
              
              <div class="toggle-group">
                <nova-toggle
                  label="Receive email updates"
                  formControlName="emailUpdates">
                </nova-toggle>
                
                <nova-toggle
                  label="Receive promotional emails"
                  formControlName="promotionalEmails">
                </nova-toggle>
              </div>
            </div>
            
            <div class="form-actions">
              <nova-button variant="link" (clicked)="resetSettings()">Reset to Default</nova-button>
              <nova-button variant="cta" (clicked)="saveSettings()">Save Settings</nova-button>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
      
      <!-- Usage Examples -->
      <h2 class="section-title">Common Usage Examples</h2>
      
      <!-- Settings Panel -->
      <div class="example-section">
        <h3 class="example-title">App Settings Panel</h3>
        <div class="settings-panel">
          <div class="settings-sections">
            <div class="settings-column">
              <div class="settings-group">
                <h4 class="settings-group-title">Account</h4>
                <nova-toggle
                  label="Two-factor authentication"
                  hint="Add an extra layer of security"
                  [(ngModel)]="accountSettings.twoFactor">
                </nova-toggle>
                
                <nova-toggle
                  label="Activity log"
                  hint="Keep a record of your account activities"
                  [(ngModel)]="accountSettings.activityLog">
                </nova-toggle>
              </div>
            </div>
            
            <div class="settings-column">
              <div class="settings-group">
                <h4 class="settings-group-title">Appearance</h4>
                <nova-toggle
                  label="Dark mode"
                  [(ngModel)]="appearanceSettings.darkMode">
                </nova-toggle>
                
                <nova-toggle
                  label="Reduce animations"
                  [(ngModel)]="appearanceSettings.reduceAnimations">
                </nova-toggle>
              </div>
            </div>
          </div>
          
          <div class="settings-footer">
            <nova-button variant="link">Cancel</nova-button>
            <nova-button variant="cta">Apply Settings</nova-button>
          </div>
        </div>
      </div>
      
      <!-- Quick Actions -->
      <div class="example-section">
        <h3 class="example-title">Quick Actions</h3>
        <div class="quick-actions">
          <div class="quick-action-item">
            <div class="quick-action-icon">🔔</div>
            <div class="quick-action-text">Notifications</div>
            <nova-toggle [(ngModel)]="quickActions.notifications"></nova-toggle>
          </div>
          
          <div class="quick-action-item">
            <div class="quick-action-icon">🔒</div>
            <div class="quick-action-text">Private Mode</div>
            <nova-toggle [(ngModel)]="quickActions.privateMode"></nova-toggle>
          </div>
          
          <div class="quick-action-item">
            <div class="quick-action-icon">✈️</div>
            <div class="quick-action-text">Airplane Mode</div>
            <nova-toggle [(ngModel)]="quickActions.airplaneMode"></nova-toggle>
          </div>
          
          <div class="quick-action-item">
            <div class="quick-action-icon">📍</div>
            <div class="quick-action-text">Location</div>
            <nova-toggle [(ngModel)]="quickActions.location"></nova-toggle>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .component-page {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    .component-title {
      font-family: var(--nova-font-family-display);
      font-size: 2.5rem;
      margin: 0 0 0.5rem;
      background: linear-gradient(90deg, var(--nova-primary), var(--nova-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .component-description {
      font-size: 1.125rem;
      margin: 0 0 2rem;
      color: var(--nova-on-background);
      opacity: 0.85;
      max-width: 800px;
    }
    
    .section-title {
      font-family: var(--nova-font-family-display);
      font-size: 1.5rem;
      margin: 2rem 0 1rem;
      color: var(--nova-primary);
    }
    
    .section-subtitle {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    nova-card {
      margin-bottom: 2rem;
    }
    
    .component-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .toggle-group {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .toggle-section {
      margin-bottom: 2rem;
    }
    
    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.3);
    }
    
    .example-section {
      margin-bottom: 2rem;
    }
    
    .example-title {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    .settings-panel {
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .settings-sections {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .settings-group {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .settings-group-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--nova-on-surface);
      opacity: 0.9;
    }
    
    .settings-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
    }
    
    .quick-actions {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
      gap: 1rem;
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .quick-action-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      background-color: rgba(var(--nova-surface-rgb), 0.5);
      border-radius: 0.5rem;
      transition: background-color 0.3s ease;
    }
    
    .quick-action-item:hover {
      background-color: rgba(var(--nova-surface-rgb), 0.8);
    }
    
    .quick-action-icon {
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
    
    .quick-action-text {
      flex-grow: 1;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .component-row,
      .settings-sections {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .quick-actions {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TogglesComponent {
  // Basic toggles
  notificationsEnabled = true;
  darkModeEnabled = true;
  soundEnabled = false;
  
  // Toggle states
  defaultToggleOn = true;
  defaultToggleOff = false;
  disabledUncheckedToggle = false;
  disabledCheckedToggle = true;
  
  // Toggle variants
  autoSaveEnabled = true;
  locationTrackingEnabled = false;
  labelBeforeToggle = true;
  labelAfterToggle = true;
  
  // Account settings
  accountSettings = {
    twoFactor: false,
    activityLog: true
  };
  
  // Appearance settings
  appearanceSettings = {
    darkMode: true,
    reduceAnimations: false
  };
  
  // Quick actions
  quickActions = {
    notifications: true,
    privateMode: false,
    airplaneMode: false,
    location: true
  };
  
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
      thirdParty: [false],
      emailUpdates: [true],
      promotionalEmails: [false]
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
      thirdParty: false,
      emailUpdates: true,
      promotionalEmails: false
    });
  }
}