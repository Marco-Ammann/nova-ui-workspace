import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaCardComponent, NovaCardHeaderComponent, NovaCardContentComponent, NovaCardFooterComponent, NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule, 
    NovaCardComponent, 
    NovaCardHeaderComponent, 
    NovaCardContentComponent, 
    NovaCardFooterComponent,
    NovaButtonComponent
  ],
  template: `
    <div class="page-container">
      <h1 class="page-title">Cards</h1>
      <p class="page-description">Examples of Nova UI card components</p>
      
      <div class="cards-grid">
        <nova-card>
          <nova-card-header title="Default Card" subtitle="Basic card component"></nova-card-header>
          <nova-card-content>
            <p>This is a basic card with default styling.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link">Cancel</nova-button>
            <nova-button>OK</nova-button>
          </nova-card-footer>
        </nova-card>
        
        <nova-card variant="primary">
          <nova-card-header title="Primary Card" subtitle="With primary styling"></nova-card-header>
          <nova-card-content>
            <p>This card uses the primary variant styling.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link">Cancel</nova-button>
            <nova-button variant="cta">Apply</nova-button>
          </nova-card-footer>
        </nova-card>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .page-title {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: var(--nova-primary);
    }
    
    .page-description {
      margin-bottom: 2rem;
      opacity: 0.8;
    }
    
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
  `]
})
export class CardsComponent {}