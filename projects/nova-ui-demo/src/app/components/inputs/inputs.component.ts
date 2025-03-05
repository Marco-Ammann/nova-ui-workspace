import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaInputComponent, NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaInputComponent,
    NovaButtonComponent
  ]
})
export class InputsComponent implements OnInit {
  // Basic examples
  username = '';
  usernameWithHint = '';
  
  // Input types
  email = '';
  password = '';
  age: number | null = null;
  
  // Inputs with icons
  usernameWithIcon = '';
  emailWithIcon = '';
  searchWithIcons = '';
  
  // Input states
  requiredUsername = '';
  disabledUsername = 'DisabledUser';
  readonlyUsername = 'ReadOnlyUser';
  
  // Form grid
  firstName = '';
  lastName = '';
  formEmail = '';
  phone = '';
  
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