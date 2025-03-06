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
  template: `
    <div class="component-page">
      <h1 class="component-title">Buttons</h1>
      <p class="component-description">Interactive elements for user actions with cosmic styling</p>
      
      <!-- Appearance Showcase -->
      <nova-card>
        <nova-card-header title="Button Appearances"></nova-card-header>
        <nova-card-content>
          <div class="component-grid">
            <div class="component-item">
              <span class="component-label">Basic</span>
              <nova-button appearance="basic">Basic</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Raised</span>
              <nova-button appearance="raised">Raised</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Stroked</span>
              <nova-button appearance="stroked">Stroked</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Flat</span>
              <nova-button appearance="flat">Flat</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Icon</span>
              <nova-button appearance="icon" icon="★"></nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">FAB</span>
              <nova-button appearance="fab" icon="+"></nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Mini FAB</span>
              <nova-button appearance="mini-fab" icon="-"></nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Extended FAB</span>
              <nova-button appearance="extended-fab" icon="→">Extended</nova-button>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Variants and States -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Button Variants"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-3">
              <div class="component-item">
                <span class="component-label">Basic</span>
                <nova-button variant="basic" [loading]="loadingStates['basic']" 
                         (clicked)="toggleLoading('basic')">Basic</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">CTA</span>
                <nova-button variant="cta" [loading]="loadingStates['cta']" 
                         (clicked)="toggleLoading('cta')">CTA</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Link</span>
                <nova-button variant="link" [loading]="loadingStates['link']" 
                         (clicked)="toggleLoading('link')">Link</nova-button>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Button States"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-3">
              <div class="component-item">
                <span class="component-label">Normal</span>
                <nova-button variant="cta">Normal</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Disabled</span>
                <nova-button variant="cta" [disabled]="true">Disabled</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Loading</span>
                <nova-button variant="cta" [loading]="true">Loading</nova-button>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Sizes and Icons -->
      <div class="component-row">
        <nova-card class="component-card">
          <nova-card-header title="Button Sizes"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-3">
              <div class="component-item">
                <span class="component-label">Small</span>
                <nova-button size="small">Small</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Medium</span>
                <nova-button size="medium">Medium</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Large</span>
                <nova-button size="large">Large</nova-button>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card">
          <nova-card-header title="Buttons with Icons"></nova-card-header>
          <nova-card-content>
            <div class="component-grid cols-3">
              <div class="component-item">
                <span class="component-label">Left Icon</span>
                <nova-button icon="↑" iconPosition="left">Upload</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Right Icon</span>
                <nova-button icon="→" iconPosition="right">Next</nova-button>
              </div>
              
              <div class="component-item">
                <span class="component-label">Icon Only</span>
                <nova-button appearance="icon" icon="♥"></nova-button>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Usage Examples -->
      <nova-card>
        <nova-card-header title="Common Usage Examples"></nova-card-header>
        <nova-card-content>
          <!-- Form Actions -->
          <div class="example-section">
            <h3 class="example-title">Form Actions</h3>
            <div class="example-preview">
              <nova-button variant="link">Cancel</nova-button>
              <nova-button>Save Draft</nova-button>
              <nova-button variant="cta">Submit</nova-button>
            </div>
          </div>
          
          <!-- Toolbar -->
          <div class="example-section">
            <h3 class="example-title">Toolbar</h3>
            <div class="example-preview">
              <nova-button appearance="icon" icon="↑"></nova-button>
              <nova-button appearance="icon" icon="↓"></nova-button>
              <nova-button appearance="icon" icon="✓"></nova-button>
              <nova-button appearance="icon" icon="✕"></nova-button>
              <nova-button>More Actions</nova-button>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="example-section">
            <h3 class="example-title">Call to Action</h3>
            <div class="example-preview centered">
              <nova-button variant="cta" size="large" icon="★">Get Started</nova-button>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
      
      <!-- Animation Levels -->
      <nova-card>
        <nova-card-header title="Animation Levels"></nova-card-header>
        <nova-card-content>
          <div class="component-grid cols-3">
            <div class="component-item">
              <span class="component-label">None</span>
              <nova-button variant="cta" animation="none">No Animation</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Normal</span>
              <nova-button variant="cta" animation="normal">Normal</nova-button>
            </div>
            
            <div class="component-item">
              <span class="component-label">Extra</span>
              <nova-button variant="cta" animation="extra">Extra</nova-button>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
    </div>
  `,
  styles: [`
    .component-page {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    .component-title {
      font-family: var(--nova-font-family-display);
      font-size: 2.5rem;
      margin: 0 0 0.5rem;
      background: linear-gradient(90deg, var(--nova-primary), var(--nova-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .component-description {
      font-size: 1.125rem;
      margin: 0 0 2rem;
      color: var(--nova-on-background);
      opacity: 0.85;
    }
    
    nova-card {
      margin-bottom: 2rem;
    }
    
    .component-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1.5rem;
    }
    
    .component-grid.cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .component-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    
    .component-label {
      font-size: 0.875rem;
      color: var(--nova-on-surface);
      opacity: 0.7;
    }
    
    .example-section {
      margin-bottom: 2rem;
    }
    
    .example-title {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    .example-preview {
      display: flex;
      gap: 1rem;
      align-items: center;
      padding: 1.5rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
    }
    
    .example-preview.centered {
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .component-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .component-grid.cols-3 {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      }
    }
  `]
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
}