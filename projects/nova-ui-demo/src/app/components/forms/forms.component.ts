import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  NovaCardComponent, 
  NovaCardHeaderComponent, 
  NovaCardContentComponent,
  NovaCardFooterComponent,
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
    NovaCardFooterComponent,
    NovaButtonComponent,
    NovaInputComponent,
    NovaCheckboxComponent,
    NovaRadioButtonComponent,
    NovaToggleComponent
  ],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  // Model binding example
  userName = '';
  email = '';
  password = '';
  agreeTerms = false;
  notifications = true;
  gender = 'prefer-not-to-say';
  theme = 'system';
  
  // Reactive form example
  reactiveForm: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreeTerms: [false, [Validators.requiredTrue]],
      notifications: [true],
      theme: ['dark']
    });
  }
  
  // Submit form
  onSubmit(): void {
    this.formSubmitted = true;
    
    if (this.reactiveForm.valid) {
      console.log('Form submitted:', this.reactiveForm.value);
      // Reset form after successful submission
      setTimeout(() => {
        this.reactiveForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          agreeTerms: false,
          notifications: true,
          theme: 'dark'
        });
        this.formSubmitted = false;
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
      agreeTerms: false,
      notifications: true,
      theme: 'dark'
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