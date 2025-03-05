import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy, 
  ElementRef,
  HostBinding
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button appearance types
 */
export type NovaButtonAppearance = 
  'basic' | 
  'raised' | 
  'stroked' | 
  'flat' | 
  'icon' | 
  'fab' | 
  'mini-fab' | 
  'extended-fab';

/**
 * Button variants for semantic meaning
 */
export type NovaButtonVariant = 
  'basic' | 
  'cta' | 
  'link';

/**
 * Button sizes
 */
export type NovaButtonSize = 
  'small' | 
  'medium' | 
  'large';

/**
 * Animation levels
 */
export type NovaButtonAnimation = 
  'none' | 
  'normal' | 
  'extra';

/**
 * Nova UI Button Component
 * 
 * A versatile button component with cosmic styling and multiple variants
 */
@Component({
  selector: 'nova-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class.nova-button]': 'true',
    '[class.nova-button--disabled]': 'disabled',
    '[class.nova-button--loading]': 'loading',
    '[attr.disabled]': 'disabled ? "" : null',
    '[attr.type]': 'type'
  }
})
export class NovaButtonComponent {
  /**
   * Visual appearance of the button
   */
  @Input() appearance: NovaButtonAppearance = 'basic';
  
  /**
   * Semantic variant of the button
   */
  @Input() variant: NovaButtonVariant = 'basic';
  
  /**
   * Size of the button
   */
  @Input() size: NovaButtonSize = 'medium';
  
  /**
   * Animation level
   */
  @Input() animation: NovaButtonAnimation = 'normal';
  
  /**
   * Whether the button is disabled
   */
  @Input() disabled = false;
  
  /**
   * Whether the button is in loading state
   */
  @Input() loading = false;
  
  /**
   * Button type (HTML attribute)
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  
  /**
   * Icon to display (Unicode character or text)
   */
  @Input() icon?: string;
  
  /**
   * Position of the icon
   */
  @Input() iconPosition: 'left' | 'right' = 'left';
  
  /**
   * Click event emitter
   */
  @Output() clicked = new EventEmitter<Event>();
  
  // Apply appearance class
  @HostBinding('class') 
  get hostClasses(): string {
    return [
      `nova-button--${this.appearance}`,
      `nova-button--${this.variant}`,
      `nova-button--${this.size}`,
      `nova-button--animation-${this.animation}`
    ].join(' ');
  }
  
  /**
   * Handle button click
   */
  onClick(event: Event): void {
    // Don't emit click events when disabled or loading
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}