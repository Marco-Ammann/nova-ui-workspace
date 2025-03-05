import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaCardFooterComponent
} from 'nova-ui';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NovaButtonComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaCardFooterComponent
  ],
  template: `
    <div class="page-container">
      <h1 class="page-title">Nova UI Library</h1>
      <p class="page-description">
        A space-themed component library for Angular applications
      </p>
      
      <div class="components-grid">
        <nova-card [hoverable]="true">
          <nova-card-header title="Buttons" subtitle="Interactive elements"></nova-card-header>
          <nova-card-content>
            <p>Nova UI provides a versatile button component with multiple appearances and variants.</p>
            <div class="preview-row">
              <nova-button>Basic</nova-button>
              <nova-button variant="cta">CTA</nova-button>
              <nova-button variant="link">Link</nova-button>
            </div>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link" routerLink="/components/buttons">View Buttons</nova-button>
          </nova-card-footer>
        </nova-card>
        
        <nova-card [hoverable]="true">
          <nova-card-header title="Cards" subtitle="Content containers"></nova-card-header>
          <nova-card-content>
            <p>Cards provide a flexible way to organize and present content in your application.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link" routerLink="/components/cards">View Cards</nova-button>
          </nova-card-footer>
        </nova-card>
        
        <nova-card [hoverable]="true">
          <nova-card-header title="Form Components" subtitle="User input elements"></nova-card-header>
          <nova-card-content>
            <p>A collection of form components including inputs, checkboxes, radio buttons, and toggles.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link" routerLink="/components/inputs">View Form Components</nova-button>
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
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      background: linear-gradient(90deg, var(--nova-primary), var(--nova-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .page-description {
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      opacity: 0.8;
    }
    
    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .preview-row {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
  `]
})
export class OverviewComponent {}