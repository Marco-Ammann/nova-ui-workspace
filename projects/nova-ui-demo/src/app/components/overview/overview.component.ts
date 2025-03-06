import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  NovaButtonComponent,
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaCardFooterComponent,
  NovaThemeTogglerComponent
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
    NovaCardFooterComponent,
    NovaThemeTogglerComponent
  ],
  template: `
    <div class="overview-page">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Nova UI</h1>
          <p class="hero-subtitle">A space-themed component library for Angular</p>
          <p class="hero-description">
            Explore our cosmic-inspired UI components designed with stellar animations
            and visually stunning theming system.
          </p>
          <div class="hero-actions">
            <nova-button variant="cta" size="large" routerLink="/components/buttons">Explore Components</nova-button>
            <nova-button variant="link" size="large" routerLink="/components/themes">View Themes</nova-button>
          </div>
        </div>
        <div class="hero-graphic">
          <div class="cosmic-object planet"></div>
          <div class="cosmic-object star-sm"></div>
          <div class="cosmic-object star-md"></div>
          <div class="cosmic-object star-lg"></div>
          <div class="cosmic-object orbit"></div>
          <div class="cosmic-grid"></div>
        </div>
      </div>
      
      <h2 class="section-title">Core Components</h2>
      
      <div class="components-grid">
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/buttons">
          <nova-card-header title="Buttons" subtitle="Interactive controls"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">🔘</div>
            <p class="component-description">Versatile buttons with multiple variants, sizes, and animation levels</p>
            <div class="component-preview">
              <nova-button>Basic</nova-button>
              <nova-button variant="cta">CTA</nova-button>
              <nova-button variant="link">Link</nova-button>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/cards">
          <nova-card-header title="Cards" subtitle="Content containers"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">🃏</div>
            <p class="component-description">Flexible cards with headers, content areas, and footers</p>
            <div class="component-preview">
              <div class="mini-card">Standard</div>
              <div class="mini-card primary">Primary</div>
              <div class="mini-card elevated">Elevated</div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/inputs">
          <nova-card-header title="Inputs" subtitle="Text fields"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">⌨️</div>
            <p class="component-description">Form inputs with cosmic styled effects and validation</p>
            <div class="component-preview">
              <div class="mini-input">
                <div class="mini-label">Email</div>
                <div class="mini-field"></div>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/checkboxes">
          <nova-card-header title="Checkboxes" subtitle="Selection controls"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">✓</div>
            <p class="component-description">Multi-selection checkboxes with indeterminate states</p>
            <div class="component-preview">
              <div class="mini-checkbox">
                <div class="mini-check"></div>
                <div class="mini-label-sm">Option 1</div>
              </div>
              <div class="mini-checkbox">
                <div class="mini-check checked"></div>
                <div class="mini-label-sm">Option 2</div>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/radio-buttons">
          <nova-card-header title="Radio Buttons" subtitle="Selection controls"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">⭕</div>
            <p class="component-description">Single selection radio buttons with cosmic animations</p>
            <div class="component-preview">
              <div class="mini-radio">
                <div class="mini-radio-circle"></div>
                <div class="mini-label-sm">Option 1</div>
              </div>
              <div class="mini-radio">
                <div class="mini-radio-circle checked"></div>
                <div class="mini-label-sm">Option 2</div>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
        
        <nova-card class="component-card" [hoverable]="true" routerLink="/components/toggles">
          <nova-card-header title="Toggles" subtitle="Switch controls"></nova-card-header>
          <nova-card-content>
            <div class="component-icon">🔄</div>
            <p class="component-description">Toggle switches with nebula animations and stars</p>
            <div class="component-preview">
              <div class="mini-toggle">
                <div class="mini-track">
                  <div class="mini-thumb"></div>
                </div>
                <div class="mini-label-sm">Disabled</div>
              </div>
              <div class="mini-toggle">
                <div class="mini-track active">
                  <div class="mini-thumb active"></div>
                </div>
                <div class="mini-label-sm">Enabled</div>
              </div>
            </div>
          </nova-card-content>
        </nova-card>
      </div>
      
      <div class="themes-section">
        <h2 class="section-title">Cosmic Themes</h2>
        <p class="section-description">Nova UI includes five space-inspired themes with light and dark variants</p>
        
        <div class="themes-strip">
          <div class="theme-pill" *ngFor="let theme of themes">
            <div class="theme-dot" [style.background]="theme.color"></div>
            <div class="theme-name">{{ theme.name }}</div>
          </div>
        </div>
        
        <div class="theme-cta">
          <nova-button variant="cta" routerLink="/components/themes">Explore Themes</nova-button>
        </div>
      </div>
      
      <nova-card class="features-card">
        <nova-card-header title="Key Features"></nova-card-header>
        <nova-card-content>
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">🎨</div>
              <div class="feature-content">
                <h3 class="feature-title">Space-Inspired Design</h3>
                <p class="feature-description">Visually distinctive cosmic themes with stellar effects</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">🌓</div>
              <div class="feature-content">
                <h3 class="feature-title">Light & Dark Modes</h3>
                <p class="feature-description">Support for both light and dark mode versions of all themes</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">📱</div>
              <div class="feature-content">
                <h3 class="feature-title">Responsive Components</h3>
                <p class="feature-description">Works across different screen sizes and devices</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h3 class="feature-title">Modern Angular</h3>
                <p class="feature-description">Built with standalone components for Angular 19+</p>
              </div>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
    </div>
  `,
  styles: [`
    .overview-page {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* Hero section */
    .hero-section {
      display: flex;
      gap: 3rem;
      margin-bottom: 4rem;
      min-height: 400px;
      position: relative;
    }
    
    .hero-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
    }
    
    .hero-title {
      font-family: var(--nova-font-family-display);
      font-size: 4rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      background: linear-gradient(90deg, var(--nova-primary), var(--nova-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      margin: 0 0 1.5rem;
      color: var(--nova-on-background);
      font-weight: 500;
    }
    
    .hero-description {
      font-size: 1.125rem;
      margin: 0 0 2rem;
      color: var(--nova-on-background);
      opacity: 0.85;
      max-width: 550px;
      line-height: 1.6;
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
    }
    
    .hero-graphic {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Cosmic object animations */
    .cosmic-object {
      position: absolute;
    }
    
    .planet {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, var(--nova-primary), var(--nova-accent1));
      box-shadow: 0 0 30px rgba(var(--nova-primary-rgb), 0.4);
      animation: float 10s ease-in-out infinite;
    }
    
    .star-sm {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--nova-accent1);
      box-shadow: 0 0 15px rgba(var(--nova-accent1-rgb), 0.8);
      top: 20%;
      left: 20%;
      animation: twinkle 4s ease-in-out infinite;
    }
    
    .star-md {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--nova-secondary);
      box-shadow: 0 0 15px rgba(var(--nova-secondary-rgb), 0.8);
      bottom: 25%;
      right: 20%;
      animation: twinkle 6s ease-in-out infinite 1s;
    }
    
    .star-lg {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--nova-accent2);
      box-shadow: 0 0 15px rgba(var(--nova-accent2-rgb), 0.8);
      bottom: 60%;
      right: 25%;
      animation: twinkle 5s ease-in-out infinite 0.5s;
    }
    
    .orbit {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 1px solid rgba(var(--nova-on-background-rgb), 0.1);
      animation: rotate 30s linear infinite;
    }
    
    .cosmic-grid {
      position: absolute;
      inset: -50px;
      background-image: 
        linear-gradient(rgba(var(--nova-on-background-rgb), 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(var(--nova-on-background-rgb), 0.05) 1px, transparent 1px);
      background-size: 30px 30px;
      z-index: -1;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }
    
    @keyframes twinkle {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.3);
      }
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    /* Components section */
    .section-title {
      font-family: var(--nova-font-family-display);
      font-size: 2rem;
      margin: 0 0 1.5rem;
      color: var(--nova-primary);
      position: relative;
    }
    
    .section-description {
      font-size: 1.125rem;
      margin: 0 0 2rem;
      color: var(--nova-on-background);
      opacity: 0.85;
      max-width: 700px;
      line-height: 1.6;
    }
    
    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .component-card {
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .component-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .component-description {
      margin-bottom: 1.5rem;
      text-align: center;
      color: var(--nova-on-surface);
      opacity: 0.9;
    }
    
    .component-preview {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    }
    
    /* Mini component previews */
    .mini-card {
      width: 60px;
      height: 60px;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .mini-card.primary {
      border-top: 2px solid var(--nova-primary);
      background-color: rgba(var(--nova-primary-rgb), 0.1);
    }
    
    .mini-card.elevated {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 0 5px rgba(var(--nova-primary-rgb), 0.2);
    }
    
    .mini-input {
      width: 180px;
    }
    
    .mini-label {
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
      color: var(--nova-on-surface);
    }
    
    .mini-label-sm {
      font-size: 0.7rem;
      color: var(--nova-on-surface);
    }
    
    .mini-field {
      height: 30px;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border: 1px solid rgba(var(--nova-on-surface-rgb), 0.2);
      border-radius: 0.25rem;
    }
    
    .mini-checkbox {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .mini-check {
      width: 16px;
      height: 16px;
      border: 1px solid rgba(var(--nova-on-surface-rgb), 0.3);
      border-radius: 3px;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
    }
    
    .mini-check.checked {
      background-color: var(--nova-primary);
      border-color: var(--nova-primary);
      position: relative;
    }
    
    .mini-check.checked::after {
      content: '✓';
      position: absolute;
      top: -1px;
      left: 2px;
      color: var(--nova-on-primary);
      font-size: 0.7rem;
    }
    
    .mini-radio {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .mini-radio-circle {
      width: 16px;
      height: 16px;
      border: 1px solid rgba(var(--nova-on-surface-rgb), 0.3);
      border-radius: 50%;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
    }
    
    .mini-radio-circle.checked {
      border-color: var(--nova-primary);
      position: relative;
    }
    
    .mini-radio-circle.checked::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--nova-primary);
    }
    
    .mini-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .mini-track {
      width: 30px;
      height: 16px;
      border-radius: 8px;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.5);
      position: relative;
    }
    
    .mini-track.active {
      background-color: rgba(var(--nova-primary-rgb), 0.3);
    }
    
    .mini-thumb {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--nova-on-surface);
      position: absolute;
      top: 2px;
      left: 2px;
      transition: transform 0.3s ease;
    }
    
    .mini-thumb.active {
      transform: translateX(14px);
      background-color: var(--nova-primary);
    }
    
    /* Themes section */
    .themes-section {
      margin-bottom: 4rem;
      text-align: center;
    }
    
    .themes-strip {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .theme-pill {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.25rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      border-radius: 2rem;
      transition: transform 0.3s ease;
    }
    
    .theme-pill:hover {
      transform: translateY(-5px);
    }
    
    .theme-dot {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(var(--nova-on-surface-rgb), 0.2);
    }
    
    .theme-name {
      font-weight: 500;
    }
    
    /* Features section */
    .features-card {
      margin-bottom: 2rem;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .feature-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }
    
    .feature-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }
    
    .feature-content {
      flex: 1;
    }
    
    .feature-title {
      font-size: 1.125rem;
      margin: 0 0 0.5rem;
      color: var(--nova-primary);
    }
    
    .feature-description {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.5;
      color: var(--nova-on-surface);
      opacity: 0.85;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .hero-section {
        flex-direction: column;
        gap: 2rem;
      }
      
      .hero-title {
        font-size: 3rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .hero-graphic {
        min-height: 250px;
      }
      
      .components-grid {
        grid-template-columns: 1fr;
      }
      
      .themes-strip {
        flex-wrap: wrap;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class OverviewComponent {
  // Available themes
  themes = [
    { name: 'Supernova', color: '#FF3823' },
    { name: 'Cosmic Blue', color: '#1E90FF' },
    { name: 'Nebula', color: '#F956C6' },
    { name: 'Dark Matter', color: '#B085FF' },
    { name: 'Black Hole', color: '#FF6B00' }
  ];
}