// radio-button.component.ts - Updated event handling
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NovaRadioButtonComponent),
      multi: true
    }
  ]
})
export class NovaRadioButtonComponent implements ControlValueAccessor {
  private static nextId = 0;
  
  @Input() label = '';
  @Input() value: any;
  @Input() name = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() hint?: string;

  @Output() change = new EventEmitter<any>();

  checked = false;
  focused = false;
  touched = false;
  
  readonly inputId = `nova-radio-${NovaRadioButtonComponent.nextId++}`;
  
  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(value: any): void {
    this.checked = this.value === value;
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
    
    if (this.checked) {
      this.onChange(this.value);
      this.change.emit(this.value);
      this.cdr.markForCheck();
    }
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

  selectRadio(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (this.disabled || this.checked) return;

    this.checked = true;
    this.onChange(this.value);
    this.change.emit(this.value);
    this.onTouched();
    this.cdr.markForCheck();
  }
}