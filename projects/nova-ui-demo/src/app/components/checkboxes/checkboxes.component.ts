import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  NovaCheckboxComponent, 
  NovaInputComponent, 
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent
} from 'nova-ui';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaCheckboxComponent,
    NovaInputComponent,
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Checkboxes</h1>
      <p class="component-description">
        Cosmic-styled selection controls for enabling multiple options
      </p>
      
      <!-- Basic Checkboxes -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Basic Checkboxes"></nova-card-header>
          <nova-card-content>
            <div class="checkbox-group">
              <nova-checkbox
                label="Subscribe to newsletter"
                [(ngModel)]="newsletter">
              </nova-checkbox>
              
              <nova-checkbox
                label="Enable notifications"
                hint="You'll receive updates about new features"
                [(ngModel)]="notifications">
              </nova-checkbox>
              
              <nova-checkbox
                label="Remember me"
                [(ngModel)]="rememberMe">
              </nova-checkbox>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Checkbox States"></nova-card-header>
          <nova-card-content>
            <div class="checkbox-group">
              <nova-checkbox
                label="Checked checkbox"
                [(ngModel)]="checkedState">
              </nova-checkbox>
              
              <nova-checkbox
                label="Indeterminate checkbox"
                [indeterminate]="isIndeterminate"
                [(ngModel)]="indeterminateState">
              </nova-checkbox>
              
              <nova-checkbox
                label="Disabled checkbox"
                [disabled]="true"
                [(ngModel)]="disabledUnchecked">
              </nova-checkbox>
              
              <nova-checkbox
                label="Disabled checked"
                [disabled]="true"
                [(ngModel)]="disabledChecked">
              </nova-checkbox>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Checkbox Groups -->
      <nova-card>
        <nova-card-header title="Checkbox Groups"></nova-card-header>
        <nova-card-content>
          <div class="group-container">
            <h3 class="group-title">Notification Preferences</h3>
            <div class="checkbox-group with-parent">
              <nova-checkbox
                label="Email notifications"
                [(ngModel)]="notificationPrefs['email']"
                (change)="updateParentCheckbox()">
              </nova-checkbox>
              
              <nova-checkbox
                label="Push notifications"
                [(ngModel)]="notificationPrefs['push']"
                (change)="updateParentCheckbox()">
              </nova-checkbox>
              
              <nova-checkbox
                label="SMS notifications"
                [(ngModel)]="notificationPrefs['sms']"
                (change)="updateParentCheckbox()">
              </nova-checkbox>
              
              <nova-checkbox
                label="In-app notifications"
                [(ngModel)]="notificationPrefs['inApp']"
                (change)="updateParentCheckbox()">
              </nova-checkbox>
              
              <div class="parent-checkbox">
                <nova-checkbox
                  label="All notifications"
                  [indeterminate]="someNotificationsSelected && !allNotificationsSelected"
                  [(ngModel)]="allNotificationsSelected"
                  (change)="toggleAllNotifications()">
                </nova-checkbox>
              </div>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Reactive Forms Integration -->
      <nova-card>
        <nova-card-header title="Form Integration"></nova-card-header>
        <nova-card-content>
          <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="checkbox-form">
            <div class="form-fields">
              <nova-input
                label="Email"
                placeholder="Enter your email"
                type="email"
                formControlName="email">
              </nova-input>
              
              <nova-checkbox
                label="Subscribe to newsletter"
                formControlName="subscribe">
              </nova-checkbox>
              
              <nova-checkbox
                label="I agree to the terms and conditions"
                [required]="true"
                formControlName="agreeTerms">
              </nova-checkbox>
            </div>
            
            <div class="form-actions">
              <nova-button type="submit" variant="cta" [disabled]="!signupForm.valid">
                Sign Up
              </nova-button>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
      
      <!-- Usage Examples -->
      <h2 class="section-title">Common Usage Examples</h2>
      
      <!-- Settings Panel -->
      <div class="example-section">
        <h3 class="example-title">Settings Panel</h3>
        <div class="settings-panel">
          <div class="settings-section">
            <h4 class="settings-section-title">Privacy Settings</h4>
            <div class="checkbox-group">
              <nova-checkbox
                label="Allow cookies"
                hint="Essential for site functionality"
                [(ngModel)]="privacySettings.cookies">
              </nova-checkbox>
              
              <nova-checkbox
                label="Allow analytics"
                hint="Helps us improve our website"
                [(ngModel)]="privacySettings.analytics">
              </nova-checkbox>
              
              <nova-checkbox
                label="Allow marketing"
                hint="Enables personalized recommendations"
                [(ngModel)]="privacySettings.marketing">
              </nova-checkbox>
            </div>
          </div>
          
          <div class="settings-section">
            <h4 class="settings-section-title">Account Settings</h4>
            <div class="checkbox-group">
              <nova-checkbox
                label="Two-factor authentication"
                [(ngModel)]="accountSettings.twoFactor">
              </nova-checkbox>
              
              <nova-checkbox
                label="Email me about account activity"
                [(ngModel)]="accountSettings.emailActivity">
              </nova-checkbox>
            </div>
          </div>
          
          <div class="settings-actions">
            <nova-button variant="link">Reset to Default</nova-button>
            <nova-button variant="cta">Save Settings</nova-button>
          </div>
        </div>
      </div>
      
      <!-- Todo List -->
      <div class="example-section">
        <h3 class="example-title">Todo List</h3>
        <div class="todo-container">
          <div class="todo-items">
            <div class="todo-item" *ngFor="let item of todoItems; let i = index" [class.completed]="item.completed">
              <nova-checkbox
                [label]="item.text"
                [(ngModel)]="item.completed">
              </nova-checkbox>
            </div>
          </div>
          
          <div class="todo-summary">
            <span>{{ getCompletedCount() }} of {{ todoItems.length }} completed</span>
            <nova-button variant="link" (clicked)="clearCompleted()">Clear completed</nova-button>
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
    
    nova-card {
      margin-bottom: 2rem;
    }
    
    .component-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .checkbox-group.with-parent {
      padding-bottom: 0.5rem;
    }
    
    .parent-checkbox {
      margin-top: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
    }
    
    .group-container {
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.2);
      border-radius: 0.5rem;
    }
    
    .group-title {
      font-size: 1.125rem;
      margin-bottom: 1.25rem;
      color: var(--nova-primary);
    }
    
    .checkbox-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-fields {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
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
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .settings-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .settings-section-title {
      font-size: 1rem;
      color: var(--nova-on-surface);
      margin-bottom: 0.5rem;
    }
    
    .settings-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
    }
    
    .todo-container {
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .todo-items {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .todo-item {
      padding: 0.5rem 0;
      transition: opacity 0.3s ease;
    }
    
    .todo-item.completed {
      opacity: 0.6;
    }
    
    .todo-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
      color: var(--nova-on-surface);
      opacity: 0.8;
    }
    
    @media (max-width: 768px) {
      .component-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class CheckboxesComponent implements OnInit {
  // Basic examples
  newsletter = false;
  notifications = false;
  rememberMe = true;
  
  // Checkbox states
  checkedState = true;
  isIndeterminate = true;
  indeterminateState = false;
  disabledUnchecked = false;
  disabledChecked = true;
  
  // Checkbox group
  notificationPrefs: { [key: string]: boolean } = {
    email: false,
    push: true,
    sms: false,
    inApp: true
  };
  allNotificationsSelected = false;
  someNotificationsSelected = true;
  
  // Privacy settings example
  privacySettings = {
    cookies: true,
    analytics: true,
    marketing: false
  };
  
  // Account settings example
  accountSettings = {
    twoFactor: false,
    emailActivity: true
  };
  
  // Todo list example
  todoItems = [
    { text: 'Learn Angular', completed: true },
    { text: 'Create a component library', completed: false },
    { text: 'Design cosmic-themed UI', completed: true },
    { text: 'Implement theme system', completed: false },
    { text: 'Test on different browsers', completed: false }
  ];
  
  // Reactive form
  signupForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // Initialize reactive form
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false],
      agreeTerms: [false, Validators.requiredTrue]
    });
    
    // Initialize parent checkbox state based on children
    this.updateParentCheckbox();
  }
  
  updateParentCheckbox(): void {
    const values = Object.values(this.notificationPrefs);
    this.allNotificationsSelected = values.every(v => v);
    this.someNotificationsSelected = values.some(v => v) && !this.allNotificationsSelected;
  }
  
  toggleAllNotifications(): void {
    Object.keys(this.notificationPrefs).forEach(key => {
      this.notificationPrefs[key] = this.allNotificationsSelected;
    });
    this.someNotificationsSelected = false;
  }
  
  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
      // Reset form after submission
      this.signupForm.reset({
        email: '',
        subscribe: false,
        agreeTerms: false
      });
    }
  }
  
  getCompletedCount(): number {
    return this.todoItems.filter(item => item.completed).length;
  }
  
  clearCompleted(): void {
    this.todoItems = this.todoItems.filter(item => !item.completed);
  }
}