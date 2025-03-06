import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  NovaCardComponent, 
  NovaCardHeaderComponent, 
  NovaCardContentComponent,
  NovaButtonComponent,
  NovaInputComponent,
  NovaCheckboxComponent,
  NovaRadioButtonComponent,
  NovaToggleComponent
} from 'nova-ui';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaButtonComponent,
    NovaInputComponent,
    NovaCheckboxComponent,
    NovaRadioButtonComponent,
    NovaToggleComponent
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Form Components</h1>
      <p class="component-description">Nova UI provides form components with cosmic-themed styling.</p>
      
      <!-- Reactive form example -->
      <nova-card>
        <nova-card-header title="Reactive Form Example"></nova-card-header>
        <nova-card-content>
          <form [formGroup]="reactiveForm" (ngSubmit)="onSubmit()" class="reactive-form">
            <div class="form-grid">
              <nova-input 
                label="First Name" 
                formControlName="firstName"
                [hint]="hasError('firstName') ? getErrorMessage('firstName') : ''">
              </nova-input>
              
              <nova-input 
                label="Last Name" 
                formControlName="lastName"
                [hint]="hasError('lastName') ? getErrorMessage('lastName') : ''">
              </nova-input>
              
              <nova-input 
                label="Email" 
                type="email"
                formControlName="email"
                [hint]="hasError('email') ? getErrorMessage('email') : ''">
              </nova-input>
              
              <nova-input 
                label="Password" 
                type="password"
                formControlName="password"
                [hint]="hasError('password') ? getErrorMessage('password') : 'Must be at least 8 characters'">
              </nova-input>
            </div>
            
            <nova-checkbox
              label="I agree to the terms"
              formControlName="agreeTerms"
              [hint]="hasError('agreeTerms') ? 'You must agree to the terms' : ''">
            </nova-checkbox>
            
            <div class="form-actions">
              <nova-button variant="link" (clicked)="resetForm()">Reset</nova-button>
              <nova-button variant="cta" type="submit" [loading]="formSubmitted && reactiveForm.valid">
                {{ formSubmitted && reactiveForm.valid ? 'Submitting...' : 'Submit' }}
              </nova-button>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
      
      <!-- Template-driven form example -->
      <nova-card>
        <nova-card-header title="Template-Driven Form Example"></nova-card-header>
        <nova-card-content>
          <form class="template-form">
            <!-- Template form content -->
            <div class="form-grid">
              <nova-input 
                label="Username" 
                placeholder="Enter username"
                [(ngModel)]="userName"
                name="userName"
                iconLeft="👤">
              </nova-input>
              
              <nova-input 
                label="Email Address" 
                placeholder="Enter email"
                type="email"
                [(ngModel)]="email"
                name="email"
                [required]="true">
              </nova-input>
            </div>
            
            <div class="form-group">
              <h4>Theme Preference</h4>
              <div class="radio-group">
                <nova-radio-button
                  *ngFor="let option of ['light', 'dark', 'system']"
                  name="theme"
                  [label]="option | titlecase"
                  [value]="option"
                  [(ngModel)]="theme">
                </nova-radio-button>
              </div>
            </div>
            
            <div class="form-group">
              <nova-checkbox
                label="I agree to the terms and conditions"
                [(ngModel)]="agreeTerms"
                name="agreeTerms"
                [required]="true">
              </nova-checkbox>
              
              <nova-toggle
                label="Enable notifications"
                [(ngModel)]="notifications"
                name="notifications">
              </nova-toggle>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
    </div>
  `,
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  // Model binding example
  userName = '';
  email = '';
  theme = 'system';
  agreeTerms = false;
  notifications = true;
  
  // Reactive form example
  reactiveForm: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }
  
  // Submit form
  onSubmit(): void {
    this.formSubmitted = true;
    
    if (this.reactiveForm.valid) {
      console.log('Form submitted:', this.reactiveForm.value);
      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  }
  
  // Clear form
  resetForm(): void {
    this.reactiveForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeTerms: false
    });
    this.formSubmitted = false;
  }
  
  // Get form control error state
  hasError(controlName: string): boolean {
    const control = this.reactiveForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.formSubmitted));
  }
  
  // Get form control error message
  getErrorMessage(controlName: string): string {
    const control = this.reactiveForm.get(controlName);
    
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'This field is required';
    }
    
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.getError('minlength').requiredLength} characters`;
    }
    
    return '';
  }
}