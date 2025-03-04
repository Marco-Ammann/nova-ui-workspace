// card.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class NovaCardComponent {
  @Input() variant: 'default' | 'primary' | 'accent' = 'default';
  @Input() elevated = false;
  @Input() hoverable = false;
}

@Component({
  selector: 'nova-card-header',
  template: `
    <div class="nova-card-header">
      <div class="nova-card-header__content">
        <h3 class="nova-card-header__title">{{ title }}</h3>
        <p *ngIf="subtitle" class="nova-card-header__subtitle">{{ subtitle }}</p>
      </div>
      <div class="nova-card-header__actions">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card-parts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class NovaCardHeaderComponent {
  @Input() title = '';
  @Input() subtitle?: string;
}

@Component({
  selector: 'nova-card-content',
  template: `
    <div class="nova-card-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-parts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NovaCardContentComponent {}

@Component({
  selector: 'nova-card-footer',
  template: `
    <div class="nova-card-footer">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-parts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NovaCardFooterComponent {}