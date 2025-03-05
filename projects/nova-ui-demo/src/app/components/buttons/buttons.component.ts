import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaButtonComponent, NovaCardComponent, NovaCardHeaderComponent, NovaCardContentComponent } from 'nova-ui';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    CommonModule, 
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  // Demo loading states
  loadingStates: { [key: string]: boolean } = {
    basic: false,
    cta: false,
    link: false
  };
  
  // Toggle loading state
  toggleLoading(key: string): void {
    this.loadingStates[key] = true;
    setTimeout(() => {
      this.loadingStates[key] = false;
    }, 2000);
  }
  
  // API documentation object
  apiProps = [
    { name: 'appearance', type: 'string', default: 'basic', description: 'Visual style of the button (basic, raised, stroked, flat, icon, fab, mini-fab, extended-fab)' },
    { name: 'variant', type: 'string', default: 'basic', description: 'Semantic meaning of the button (basic, cta, link)' },
    { name: 'size', type: 'string', default: 'medium', description: 'Size of the button (small, medium, large)' },
    { name: 'animation', type: 'string', default: 'normal', description: 'Level of animation effects (none, normal, extra)' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled' },
    { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading spinner and disables button' },
    { name: 'type', type: 'string', default: 'button', description: 'HTML button type (button, submit, reset)' },
    { name: 'icon', type: 'string', default: 'undefined', description: 'Icon to display (text or unicode character)' },
    { name: 'iconPosition', type: 'string', default: 'left', description: 'Position of the icon (left, right)' },
    { name: 'clicked', type: 'EventEmitter<Event>', default: '-', description: 'Event emitted when button is clicked' }
  ];
}