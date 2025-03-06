import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  NovaRadioButtonComponent, 
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaCardFooterComponent
} from 'nova-ui';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaRadioButtonComponent,
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Radio Buttons</h1>
      <p class="component-description">
        Single selection controls with cosmic styling and animations
      </p>
      
      <!-- Basic Radio Groups -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Basic Radio Group"></nova-card-header>
          <nova-card-content>
            <div class="radio-group">
              <nova-radio-button
                name="basicOptions"
                label="Option 1"
                value="option1"
                [(ngModel)]="selectedOption">
              </nova-radio-button>
              
              <nova-radio-button
                name="basicOptions"
                label="Option 2"
                value="option2"
                [(ngModel)]="selectedOption">
              </nova-radio-button>
              
              <nova-radio-button
                name="basicOptions"
                label="Option 3"
                value="option3"
                [(ngModel)]="selectedOption">
              </nova-radio-button>
            </div>
            
            <div class="selected-value">
              Selected: <span class="value">{{ selectedOption }}</span>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Radio Button States"></nova-card-header>
          <nova-card-content>
            <div class="radio-group">
              <nova-radio-button
                name="statesDemo"
                label="Default radio button"
                value="default"
                [(ngModel)]="stateDemo">
              </nova-radio-button>
              
              <nova-radio-button
                name="statesDemo"
                label="Checked radio button"
                value="checked"
                [(ngModel)]="stateDemo">
              </nova-radio-button>
              
              <nova-radio-button
                name="statesDemo"
                label="Disabled radio button"
                value="disabled"
                [disabled]="true"
                [(ngModel)]="stateDemo">
              </nova-radio-button>
              
              <nova-radio-button
                name="statesDemo"
                label="Disabled checked radio button"
                value="disabledChecked"
                [disabled]="true"
                [(ngModel)]="stateDemo">
              </nova-radio-button>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Radio with Hints -->
      <nova-card>
        <nova-card-header title="Radio Buttons with Hints"></nova-card-header>
        <nova-card-content>
          <div class="radio-group">
            <nova-radio-button
              name="notificationPreference"
              label="Email notifications"
              value="email"
              hint="Receive notifications via email"
              [(ngModel)]="notificationPreference">
            </nova-radio-button>
            
            <nova-radio-button
              name="notificationPreference"
              label="SMS notifications"
              value="sms"
              hint="Receive notifications via text message"
              [(ngModel)]="notificationPreference">
            </nova-radio-button>
            
            <nova-radio-button
              name="notificationPreference"
              label="Push notifications"
              value="push"
              hint="Receive notifications on your device"
              [(ngModel)]="notificationPreference">
            </nova-radio-button>
            
            <nova-radio-button
              name="notificationPreference"
              label="No notifications"
              value="none"
              hint="You will not receive any notifications"
              [(ngModel)]="notificationPreference">
            </nova-radio-button>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Reactive Forms Integration -->
      <nova-card>
        <nova-card-header title="Form Integration"></nova-card-header>
        <nova-card-content>
          <form [formGroup]="surveyForm" (ngSubmit)="onSubmit()" class="survey-form">
            <div class="form-section">
              <h3 class="section-subtitle">How often do you use our product?</h3>
              <div class="radio-group">
                <nova-radio-button
                  *ngFor="let frequency of usageFrequency"
                  name="usage"
                  [label]="frequency.label"
                  [value]="frequency.value"
                  formControlName="usage">
                </nova-radio-button>
              </div>
              <div *ngIf="submitted && f['usage'].errors?.['required']" class="error-message">
                Please select your usage frequency
              </div>
            </div>
            
            <div class="form-section">
              <h3 class="section-subtitle">Overall satisfaction</h3>
              <div class="radio-group horizontal">
                <nova-radio-button
                  *ngFor="let option of satisfaction"
                  name="satisfaction"
                  [label]="option.label"
                  [value]="option.value"
                  formControlName="satisfaction">
                </nova-radio-button>
              </div>
              <div *ngIf="submitted && f['satisfaction'].errors?.['required']" class="error-message">
                Please rate your satisfaction
              </div>
            </div>
            
            <div class="form-actions">
              <nova-button type="submit" variant="cta">Submit Survey</nova-button>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
      
      <!-- Usage Examples -->
      <h2 class="section-title">Common Usage Examples</h2>
      
      <!-- Shipping Method -->
      <div class="example-section">
        <h3 class="example-title">Shipping Method Selection</h3>
        <div class="example-container">
          <div class="radio-cards">
            <div class="radio-card" [class.selected]="shippingMethod === 'standard'">
              <div class="radio-card-content">
                <div class="radio-card-header">
                  <nova-radio-button
                    name="shippingMethod"
                    label="Standard Shipping"
                    value="standard"
                    [(ngModel)]="shippingMethod">
                  </nova-radio-button>
                  <span class="radio-card-price">Free</span>
                </div>
                <p class="radio-card-description">Delivery in 5-7 business days</p>
              </div>
            </div>
            
            <div class="radio-card" [class.selected]="shippingMethod === 'express'">
              <div class="radio-card-content">
                <div class="radio-card-header">
                  <nova-radio-button
                    name="shippingMethod"
                    label="Express Shipping"
                    value="express"
                    [(ngModel)]="shippingMethod">
                  </nova-radio-button>
                  <span class="radio-card-price">$10.00</span>
                </div>
                <p class="radio-card-description">Delivery in 2-3 business days</p>
              </div>
            </div>
            
            <div class="radio-card" [class.selected]="shippingMethod === 'nextDay'">
              <div class="radio-card-content">
                <div class="radio-card-header">
                  <nova-radio-button
                    name="shippingMethod"
                    label="Next Day Delivery"
                    value="nextDay"
                    [(ngModel)]="shippingMethod">
                  </nova-radio-button>
                  <span class="radio-card-price">$25.00</span>
                </div>
                <p class="radio-card-description">Delivery by tomorrow if ordered before 2PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Theme Selection -->
      <div class="example-section">
        <h3 class="example-title">Theme Selection</h3>
        <div class="example-container">
          <div class="radio-group horizontal">
            <nova-radio-button
              name="themePreference"
              label="Light Mode"
              value="light"
              [(ngModel)]="themePreference">
            </nova-radio-button>
            
            <nova-radio-button
              name="themePreference"
              label="Dark Mode"
              value="dark"
              [(ngModel)]="themePreference">
            </nova-radio-button>
            
            <nova-radio-button
              name="themePreference"
              label="System Preference"
              value="system"
              [(ngModel)]="themePreference">
            </nova-radio-button>
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
    
    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }
    
    .radio-group.horizontal {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem 3rem;
    }
    
    .selected-value {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
      font-family: var(--nova-font-family-mono);
      font-size: 0.875rem;
    }
    
    .value {
      color: var(--nova-primary);
      font-weight: 600;
    }
    
    .survey-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .form-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
    
    .error-message {
      color: var(--nova-error);
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
    
    .example-section {
      margin-bottom: 2rem;
    }
    
    .example-title {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    .example-container {
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .radio-cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .radio-card {
      border: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .radio-card.selected {
      border-color: var(--nova-primary);
      background-color: rgba(var(--nova-primary-rgb), 0.05);
      box-shadow: 0 0 15px rgba(var(--nova-primary-rgb), 0.15);
    }
    
    .radio-card-content {
      padding: 0.5rem;
    }
    
    .radio-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    .radio-card-price {
      font-weight: 600;
      color: var(--nova-primary);
    }
    
    .radio-card-description {
      margin: 0 0 0 1.5rem;
      font-size: 0.875rem;
      opacity: 0.8;
    }
    
    @media (max-width: 768px) {
      .component-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .radio-group.horizontal {
        flex-direction: column;
        gap: 1.25rem;
      }
    }
  `]
})
export class RadioButtonsComponent {
  // Basic radio group
  selectedOption = 'option2';
  
  // Radio button states demo
  stateDemo = 'checked';
  
  // With hints
  notificationPreference = 'email';
  
  // Theme selection
  themePreference = 'dark';
  
  // Shipping method
  shippingMethod = 'standard';
  
  // Reactive form
  surveyForm: FormGroup;
  submitted = false;
  
  // Form options
  usageFrequency = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'rarely', label: 'Rarely' }
  ];
  
  satisfaction = [
    { value: 'very-dissatisfied', label: 'Very Dissatisfied' },
    { value: 'dissatisfied', label: 'Dissatisfied' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'satisfied', label: 'Satisfied' },
    { value: 'very-satisfied', label: 'Very Satisfied' }
  ];
  
  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      usage: ['', Validators.required],
      satisfaction: ['', Validators.required]
    });
  }
  
  // Submit reactive form
  onSubmit(): void {
    this.submitted = true;
    
    if (this.surveyForm.valid) {
      console.log('Survey submitted:', this.surveyForm.value);
      // Reset form after successful submission
      setTimeout(() => {
        this.surveyForm.reset();
        this.submitted = false;
      }, 2000);
    }
  }
  
  // Get form control
  get f() {
    return this.surveyForm.controls;
  }
}