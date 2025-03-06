import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NovaCardComponent, 
  NovaCardHeaderComponent, 
  NovaCardContentComponent, 
  NovaCardFooterComponent,
  NovaButtonComponent
} from 'nova-ui';

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
    <div class="component-page">
      <h1 class="component-title">Cards</h1>
      <p class="component-description">
        Versatile containers for content with cosmic-styled visuals and effects
      </p>
      
      <!-- Basic Cards -->
      <div class="component-row">
        <nova-card>
          <nova-card-header title="Default Card" subtitle="Basic container for content"></nova-card-header>
          <nova-card-content>
            <p>This is a standard card with default styling. Cards provide a flexible way to organize content with a consistent visual style.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link">Cancel</nova-button>
            <nova-button>Confirm</nova-button>
          </nova-card-footer>
        </nova-card>
        
        <nova-card [hoverable]="true">
          <nova-card-header title="Hoverable Card" subtitle="With hover animation"></nova-card-header>
          <nova-card-content>
            <p>This card has the [hoverable] property set to true, which adds a subtle elevation and glow effect on hover.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button>Learn More</nova-button>
          </nova-card-footer>
        </nova-card>
      </div>
      
      <!-- Card Variants -->
      <h2 class="section-title">Card Variants</h2>
      <div class="component-row">
        <nova-card variant="primary">
          <nova-card-header title="Primary Card" subtitle="Stands out with primary color accent"></nova-card-header>
          <nova-card-content>
            <p>Primary variant emphasizes important content with accented styling using the theme's primary color.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="cta">Primary Action</nova-button>
          </nova-card-footer>
        </nova-card>
        
        <nova-card variant="accent">
          <nova-card-header title="Accent Card" subtitle="With accent color styling"></nova-card-header>
          <nova-card-content>
            <p>Accent variant provides an alternative emphasis using the theme's secondary accent colors.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link">Cancel</nova-button>
            <nova-button variant="cta">Action</nova-button>
          </nova-card-footer>
        </nova-card>
      </div>
      
      <!-- Elevated Cards -->
      <h2 class="section-title">Card Elevation</h2>
      <div class="component-row">
        <nova-card [elevated]="true">
          <nova-card-header title="Elevated Card" subtitle="With shadow elevation"></nova-card-header>
          <nova-card-content>
            <p>Elevated cards use drop shadows to create a sense of height above the background, drawing more attention.</p>
          </nova-card-content>
        </nova-card>
        
        <nova-card [elevated]="true" [hoverable]="true">
          <nova-card-header title="Elevated & Hoverable" subtitle="Combined properties"></nova-card-header>
          <nova-card-content>
            <p>This card combines elevation with hover effects for maximum visual impact and interactivity.</p>
          </nova-card-content>
        </nova-card>
      </div>
      
      <!-- Card Usage Examples -->
      <h2 class="section-title">Common Usage Examples</h2>
      
      <!-- Content Card -->
      <div class="example-section">
        <h3 class="example-title">Content Card</h3>
        <nova-card>
          <nova-card-header title="The Cosmic Universe" subtitle="Exploring the wonders of space"></nova-card-header>
          <nova-card-content>
            <div class="example-content">
              <p>The universe contains billions of galaxies, each with billions of stars, planets, and other celestial objects. Our own Milky Way galaxy has a supermassive black hole at its center.</p>
              <p>Recent discoveries have revealed thousands of exoplanets, many potentially habitable, orbiting distant stars.</p>
            </div>
          </nova-card-content>
          <nova-card-footer>
            <nova-button>Read More</nova-button>
          </nova-card-footer>
        </nova-card>
      </div>
      
      <!-- Media Card -->
      <div class="example-section">
        <h3 class="example-title">Media Card</h3>
        <nova-card>
          <div class="card-media-container">
            <div class="card-media-placeholder">
              <span class="media-icon">🌌</span>
            </div>
          </div>
          <nova-card-header title="Nebula Formations" subtitle="Stellar nurseries"></nova-card-header>
          <nova-card-content>
            <p>Nebulae are interstellar clouds of dust, hydrogen, helium and other ionized gases where new stars are born.</p>
          </nova-card-content>
          <nova-card-footer>
            <nova-button variant="link">Share</nova-button>
            <nova-button>View</nova-button>
          </nova-card-footer>
        </nova-card>
      </div>
      
      <!-- Dashboard Card -->
      <div class="example-section">
        <h3 class="example-title">Dashboard Card</h3>
        <div class="component-row cols-3">
          <nova-card [hoverable]="true">
            <nova-card-header title="New Users"></nova-card-header>
            <nova-card-content>
              <div class="stat-container">
                <span class="stat-value">2,854</span>
                <span class="stat-change positive">+12%</span>
              </div>
            </nova-card-content>
          </nova-card>
          
          <nova-card [hoverable]="true">
            <nova-card-header title="Active Sessions"></nova-card-header>
            <nova-card-content>
              <div class="stat-container">
                <span class="stat-value">1,258</span>
                <span class="stat-change positive">+8%</span>
              </div>
            </nova-card-content>
          </nova-card>
          
          <nova-card [hoverable]="true">
            <nova-card-header title="Conversion Rate"></nova-card-header>
            <nova-card-content>
              <div class="stat-container">
                <span class="stat-value">4.6%</span>
                <span class="stat-change negative">-1.2%</span>
              </div>
            </nova-card-content>
          </nova-card>
        </div>
      </div>
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
      max-width: 800px;
    }
    
    .section-title {
      font-family: var(--nova-font-family-display);
      font-size: 1.5rem;
      margin: 2rem 0 1rem;
      color: var(--nova-primary);
    }
    
    .component-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .component-row.cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .example-section {
      margin-bottom: 2rem;
    }
    
    .example-title {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--nova-primary);
    }
    
    .example-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .card-media-container {
      width: 100%;
      height: 200px;
      background-color: rgba(var(--nova-primary-rgb), 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .card-media-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, 
        rgba(var(--nova-primary-rgb), 0.3), 
        rgba(var(--nova-secondary-rgb), 0.3));
    }
    
    .media-icon {
      font-size: 4rem;
    }
    
    .stat-container {
      display: flex;
      align-items: baseline;
      gap: 1rem;
    }
    
    .stat-value {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--nova-on-surface);
    }
    
    .stat-change {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
    
    .stat-change.positive {
      color: var(--nova-success);
      background-color: rgba(var(--nova-success-rgb), 0.1);
    }
    
    .stat-change.negative {
      color: var(--nova-error);
      background-color: rgba(var(--nova-error-rgb), 0.1);
    }
    
    @media (max-width: 768px) {
      .component-row,
      .component-row.cols-3 {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class CardsComponent {}