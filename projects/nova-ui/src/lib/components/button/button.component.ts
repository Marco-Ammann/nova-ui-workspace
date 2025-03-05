import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
  ElementRef,
  NgZone,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type NovaButtonAppearance = 
  'basic' | 
  'raised' | 
  'stroked' | 
  'flat' | 
  'icon' | 
  'fab' | 
  'mini-fab' | 
  'extended-fab';

export type NovaButtonVariant = 
  'basic' | 
  'cta' | 
  'link';

export type NovaButtonSize = 
  'small' | 
  'medium' | 
  'large';

export type NovaButtonAnimation = 
  'none' | 
  'normal' | 
  'extra';

@Component({
  selector: 'nova-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
  host: {
    'class': 'nova-button',
    '[class.nova-button--disabled]': 'disabled',
    '[class.nova-button--loading]': 'loading'
  }
})
export class NovaButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() appearance: NovaButtonAppearance = 'basic';
  @Input() variant: NovaButtonVariant = 'basic';
  @Input() size: NovaButtonSize = 'medium';
  @Input() animation: NovaButtonAnimation = 'normal';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  
  @Output() clicked = new EventEmitter<Event>();
  
  private mouseListener?: (e: MouseEvent) => void;
  
  @HostBinding('class')
  get hostClasses(): string {
    return `nova-button nova-button--${this.appearance} nova-button--${this.variant} nova-button--${this.size} nova-button--animation-${this.animation}`;
  }
  
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private zone: NgZone
  ) {}
  
  ngOnInit(): void {
    // Initialize
  }
  
  ngAfterViewInit(): void {
    // Add mouse move tracking for hover effects
    if (this.animation !== 'none') {
      this.zone.runOutsideAngular(() => {
        this.mouseListener = (event: MouseEvent) => {
          const rect = this.elementRef.nativeElement.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          
          this.elementRef.nativeElement.style.setProperty('--pointer-x', `${x}%`);
          this.elementRef.nativeElement.style.setProperty('--pointer-y', `${y}%`);
        };
        
        this.elementRef.nativeElement.addEventListener('mousemove', this.mouseListener);
      });
    }
  }
  
  ngOnDestroy(): void {
    // Clean up event listeners
    if (this.mouseListener) {
      this.elementRef.nativeElement.removeEventListener('mousemove', this.mouseListener);
    }
  }
  
  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}