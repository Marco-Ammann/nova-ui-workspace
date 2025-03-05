import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaCheckboxComponent, NovaInputComponent, NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaCheckboxComponent,
    NovaInputComponent,
    NovaButtonComponent
  ]
})
export class CheckboxesComponent implements OnInit {
  // Basic examples
  newsletter = false;
  notifications = false;
  
  // Checkbox states
  checkedState = true;
  isIndeterminate = true;
  indeterminateState = false;
  termsAgreed = false;
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
      this.signupForm.reset();
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}