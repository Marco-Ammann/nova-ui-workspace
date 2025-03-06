import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  NovaInputComponent,
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaCardFooterComponent
} from 'nova-ui';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaInputComponent,
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Inputs</h1>
      <p class="component-description">
        Text input components with cosmic styling and interactive effects
      </p>
      
      <!-- Basic Inputs -->
      <nova-card>
        <nova-card-header title="Basic Inputs"></nova-card-header>
        <nova-card-content>
          <div class="component-grid">
            <div class="component-item">
              <span class="component-label">Default Input</span>
              <nova-input
                label="Username"
                placeholder="Enter username"
                [(ngModel)]="username">
              </nova-input>
            </div>
            
            <div class="component-item">
              <span class="component-label">With Hint</span>
              <nova-input
                label="Username"
                placeholder="Enter username"
                hint="Choose a name between 3-20 characters"
                [(ngModel)]="usernameWithHint">
              </nova-input>
            </div>
            
            <div class="component-item">
              <span class="component-label">Required</span>
              <nova-input
                label="Username"
                placeholder="Enter username"
                [required]="true"
                [(ngModel)]="requiredUsername">
              </nova-input>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Input Types -->
      <nova-card>
        <nova-card-header title="Input Types"></nova-card-header>
        <nova-card-content>
          <div class="component-grid">
            <div class="component-item">
              <span class="component-label">Text</span>
              <nova-input
                label="Full Name"
                placeholder="Enter your name"
                type="text"
                [(ngModel)]="name">
              </nova-input>
            </div>
            
            <div class="component-item">
              <span class="component-label">Email</span>
              <nova-input
                label="Email Address"
                placeholder="name@example.com"
                type="email"
                [(ngModel)]="email">
              </nova-input>
            </div>
            
            <div class="component-item">
              <span class="component-label">Password</span>
              <nova-input
                label="Password"
                placeholder="Enter your password"
                type="password"
                [(ngModel)]="password">
              </nova-input>
            </div>
            
            <div class="component-item">
              <span class="component-label">Number</span>
              <nova-input
                label="Age"
                placeholder="Enter your age"
                type="number"
                [(ngModel)]="age">
              </nova-input>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Input with Icons -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Input with Icons"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-2">
              <div class="component-item">
                <span class="component-label">Left Icon</span>
                <nova-input
                  label="Username"
                  placeholder="Enter username"
                  iconLeft="👤"
                  [(ngModel)]="usernameWithIcon">
                </nova-input>
              </div>
              
              <div class="component-item">
                <span class="component-label">Right Icon</span>
                <nova-input
                  label="Email Address"
                  placeholder="name@example.com"
                  iconRight="✉️"
                  [(ngModel)]="emailWithIcon">
                </nova-input>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Input States"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-2">
              <div class="component-item">
                <span class="component-label">Disabled</span>
                <nova-input
                  label="Username"
                  placeholder="Enter username"
                  [disabled]="true"
                  [(ngModel)]="disabledUsername">
                </nova-input>
              </div>
              
              <div class="component-item">
                <span class="component-label">Read-only</span>
                <nova-input
                  label="Username"
                  [readonly]="true"
                  [(ngModel)]="readonlyUsername">
                </nova-input>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Form Validation -->
      <nova-card>
        <nova-card-header title="Form Validation"></nova-card-header>
        <nova-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
            <div class="form-row">
              <nova-input
                label="Email"
                placeholder="Enter your email"
                type="email"
                formControlName="email">
              </nova-input>
              
              <nova-input
                label="Password"
                placeholder="Enter your password"
                type="password"
                formControlName="password">
              </nova-input>
            </div>
            
            <div class="form-actions">
              <nova-button variant="link">Forgot Password?</nova-button>
              <nova-button type="submit" variant="cta" [disabled]="!loginForm.valid">Login</nova-button>
            </div>
          </form>
        </nova-card-content>
      </nova-card>
      
      <!-- Usage Examples -->
      <h2 class="section-title">Common Usage Examples</h2>
      
      <!-- Search Input -->
      <div class="example-section">
        <h3 class="example-title">Search Input</h3>
        <div class="example-preview">
          <nova-input
            placeholder="Search..."
            iconLeft="🔍"
            [(ngModel)]="searchTerm">
          </nova-input>
          <nova-button variant="cta">Search</nova-button>
        </div>
      </div>
      
      <!-- Subscription Form -->
      <div class="example-section">
        <h3 class="example-title">Newsletter Subscription</h3>
        <div class="example-preview">
          <nova-input
            placeholder="Enter your email"
            type="email"
            iconRight="✉️"
            [(ngModel)]="newsletterEmail">
          </nova-input>
          <nova-button variant="cta">Subscribe</nova-button>
        </div>
      </div>
      
      <!-- Input Grid -->
      <div class="example-section">
        <h3 class="example-title">Contact Form</h3>
        <div class="contact-form">
          <div class="contact-form-row">
            <nova-input
              label="First Name"
              placeholder="Enter first name"
              [(ngModel)]="contactForm.firstName">
            </nova-input>
            
            <nova-input
              label="Last Name"
              placeholder="Enter last name"
              [(ngModel)]="contactForm.lastName">
            </nova-input>
          </div>
          
          <nova-input
            label="Email Address"
            placeholder="name@example.com"
            type="email"
            [(ngModel)]="contactForm.email">
          </nova-input>
          
          <nova-input
            label="Message"
            placeholder="Enter your message"
            [(ngModel)]="contactForm.message">
          </nova-input>
          
          <div class="form-actions end">
            <nova-button variant="cta">Send Message</nova-button>
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
    
    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .component-grid.cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .component-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .component-label {
      font-size: 0.875rem;
      color: var(--nova-on-surface);
      opacity: 0.7;
    }
    
    .login-form {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
    }
    
    .form-actions.end {
      justify-content: flex-end;
    }
    
    .example-section {
      margin-bottom: 2rem;
    }
    
    .example-title {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    .example-preview {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .contact-form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    @media (max-width: 768px) {
      .component-row,
      .form-row,
      .contact-form-row,
      .component-grid.cols-2 {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }
    }
  `]
})
export class InputsComponent implements OnInit {
  // Basic examples
  username = '';
  usernameWithHint = '';
  
  // Input types
  name = '';
  email = '';
  password = '';
  age: number | null = null;
  
  // Inputs with icons
  usernameWithIcon = '';
  emailWithIcon = '';
  searchTerm = '';
  
  // Input states
  requiredUsername = '';
  disabledUsername = 'DisabledUser';
  readonlyUsername = 'ReadOnlyUser';
  
  // Search and examples
  newsletterEmail = '';
  
  // Contact form
  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };
  
  // Reactive form
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // Initialize reactive form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      // Reset form after submission
      this.loginForm.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}