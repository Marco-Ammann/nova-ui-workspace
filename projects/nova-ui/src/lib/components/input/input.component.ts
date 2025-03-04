// input.component.ts
import { Component, Input, OnInit, Optional, Self, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nova-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class NovaInputComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() hint?: string;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() autocomplete?: string;
  
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();
  
  value: any = '';
  focused = false;
  touched = false;
  errorMessage = '';
  
  private onChange: any = () => {};
  private onTouched: any = () => {};
  
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  
  ngOnInit(): void {}
  
  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  // Event handlers
  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }
  
  onInputFocus(event: FocusEvent): void {
    this.focused = true;
    this.focus.emit(event);
  }
  
  onInputBlur(event: FocusEvent): void {
    this.focused = false;
    this.touched = true;
    this.onTouched();
    this.blur.emit(event);
    
    this.updateErrorMessage();
  }
  
  private updateErrorMessage(): void {
    if (!this.ngControl || !this.ngControl.errors) {
      this.errorMessage = '';
      return;
    }
    
    if (this.ngControl.errors['required']) {
      this.errorMessage = 'This field is required';
    } else if (this.ngControl.errors['email']) {
      this.errorMessage = 'Please enter a valid email';
    } else if (this.ngControl.errors['minlength']) {
      this.errorMessage = `Minimum length is ${this.ngControl.errors['minlength'].requiredLength}`;
    } else if (this.ngControl.errors['maxlength']) {
      this.errorMessage = `Maximum length is ${this.ngControl.errors['maxlength'].requiredLength}`;
    } else if (this.ngControl.errors['pattern']) {
      this.errorMessage = 'Invalid format';
    } else {
      this.errorMessage = 'Invalid value';
    }
  }
}