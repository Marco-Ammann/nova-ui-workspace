import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NovaRadioButtonComponent, NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NovaRadioButtonComponent,
    NovaButtonComponent
  ],
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent {
  // Basic radio group
  selectedOption = 'option2';
  
  // Theme preference
  themePreference = 'dark';
  
  // Disabled state
  shippingMethod = 'standard';
  
  // With hints
  notificationPreference = 'email';
  
  // Reactive form
  surveyForm: FormGroup;
  submitted = false;
  
  // Options for survey form
  ageGroups = [
    { value: 'under18', label: 'Under 18' },
    { value: '18-24', label: '18-24' },
    { value: '25-34', label: '25-34' },
    { value: '35-44', label: '35-44' },
    { value: '45-54', label: '45-54' },
    { value: '55plus', label: '55+' }
  ];
  
  usageFrequency = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'rarely', label: 'Rarely' }
  ];
  
  satisfaction = [
    { value: 'veryDissatisfied', label: 'Very Dissatisfied' },
    { value: 'dissatisfied', label: 'Dissatisfied' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'satisfied', label: 'Satisfied' },
    { value: 'verySatisfied', label: 'Very Satisfied' }
  ];
  
  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      ageGroup: ['', Validators.required],
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