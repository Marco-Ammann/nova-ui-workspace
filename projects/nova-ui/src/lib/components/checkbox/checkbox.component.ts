// checkbox.component.ts - Updated event handling
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NovaCheckboxComponent),
      multi: true
    }
  ]
})
export class NovaCheckboxComponent implements ControlValueAccessor {
  private static nextId = 0;
  
  @Input() label = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() indeterminate = false;
  @Input() name?: string;
  @Input() value?: any;
  @Input() hint?: string;
  
  @Output() change = new EventEmitter<boolean>();
  
  checked = false;
  focused = false;
  touched = false;
  
  readonly inputId = `nova-checkbox-${NovaCheckboxComponent.nextId++}`;
  
  private onChange: any = () => {};
  private onTouched: any = () => {};
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  writeValue(value: any): void {
    this.checked = !!value;
    this.cdr.markForCheck();
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  
  onInputChange(event: Event): void {
    event.stopPropagation();
    
    if (this.disabled) return;
    
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
    this.cdr.markForCheck();
  }
  
  onInputFocus(): void {
    this.focused = true;
    this.cdr.markForCheck();
  }
  
  onInputBlur(): void {
    this.focused = false;
    this.touched = true;
    this.onTouched();
    this.cdr.markForCheck();
  }
  
  toggleChecked(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (this.disabled) return;
    
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
    this.onTouched();
    this.cdr.markForCheck();
  }
}