import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { 
  NovaThemeTogglerComponent,
  NovaThemeService,
  NovaThemeBase,
  NovaButtonComponent
} from 'nova-ui';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NovaThemeTogglerComponent,
    NovaButtonComponent
  ],
  template: `
    <div class="app-container" [class.sidenav-open]="sidenavOpen">
      <!-- Header -->
      <header class="app-header">
        <button class="menu-toggle" (click)="toggleSidenav()" aria-label="Toggle menu">
          <span class="menu-icon">☰</span>
        </button>
        
        <h1 class="app-title">
          <a routerLink="/">
            <span class="nova-text-gradient">Nova UI</span>
          </a>
        </h1>
        
        <div class="header-actions">
          <a href="https://github.com/your-repo/nova-ui" target="_blank" class="github-link">
            <span class="github-icon">★</span>
            <span class="github-text">GitHub</span>
          </a>
          <nova-theme-toggler></nova-theme-toggler>
        </div>
      </header>

      <!-- Main Content -->
      <div class="app-content">
        <!-- Sidenav -->
        <aside #sidenav class="app-sidenav" [class.open]="sidenavOpen">
          <div class="sidenav-header">
            <h2>Components</h2>
            <button *ngIf="isMobile" class="sidenav-close" (click)="closeSidenav()">✕</button>
          </div>
          
          <nav class="sidenav-nav">
            <a 
              routerLink="/components/overview" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">🏠</span>
              <span>Overview</span>
            </a>
            
            <a 
              routerLink="/components/themes" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">🎨</span>
              <span>Themes</span>
            </a>
            
            <div class="nav-category">Form Controls</div>
            
            <a 
              routerLink="/components/buttons" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">🔘</span>
              <span>Buttons</span>
            </a>
            
            <a 
              routerLink="/components/inputs" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">⌨️</span>
              <span>Inputs</span>
            </a>
            
            <a 
              routerLink="/components/checkboxes" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">✓</span>
              <span>Checkboxes</span>
            </a>
            
            <a 
              routerLink="/components/radio-buttons" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">⭕</span>
              <span>Radio Buttons</span>
            </a>
            
            <a 
              routerLink="/components/toggles" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">🔄</span>
              <span>Toggles</span>
            </a>
            
            <div class="nav-category">Layout</div>
            
            <a 
              routerLink="/components/cards" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">🃏</span>
              <span>Cards</span>
            </a>
            
            <a 
              routerLink="/components/forms" 
              routerLinkActive="active"
              class="nav-item"
              (click)="onNavItemClick()">
              <span class="nav-icon">📝</span>
              <span>Forms</span>
            </a>
          </nav>
          
          <div class="sidenav-footer">
            <div class="current-theme">
              <div class="theme-indicator" [style.background]="getCurrentThemeColor()"></div>
              <span>{{ getCurrentThemeName() }}</span>
            </div>
            <p class="version">Nova UI v1.0.0</p>
          </div>
        </aside>

        <!-- Content Area -->
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      
      <!-- Mobile backdrop -->
      <div 
        class="sidenav-backdrop" 
        [class.visible]="sidenavOpen && isMobile" 
        (click)="closeSidenav()">
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      @media (min-width: 1024px) {
        &.sidenav-open {
          margin-left: 280px;
        }
      }
    }

    /* Header */
    .app-header {
      height: 64px;
      padding: 0 1.5rem;
      background-color: var(--nova-surface);
      color: var(--nova-on-surface);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle at 30% 30%,
          rgba(var(--nova-primary-rgb), 0.05),
          transparent 70%
        );
        z-index: -1;
      }
    }

    .menu-toggle {
      background: transparent;
      border: none;
      color: var(--nova-on-surface);
      font-size: 1.5rem;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: rgba(var(--nova-surface-alt-rgb), 0.5);
      }
    }

    .app-title {
      font-family: var(--nova-font-family-display);
      font-size: 1.75rem;
      font-weight: 600;
      margin: 0;
      
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    .github-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
      color: var(--nova-on-surface);
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 0.9375rem;
      
      &:hover {
        background-color: rgba(var(--nova-surface-alt-rgb), 0.5);
        transform: translateY(-2px);
      }
    }
    
    .github-icon {
      font-size: 1.25rem;
    }
    
    @media (max-width: 600px) {
      .github-text {
        display: none;
      }
      
      .github-link {
        padding: 0.5rem;
      }
    }

    /* Sidenav */
    .app-sidenav {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      height: 100vh;
      background-color: var(--nova-surface);
      display: flex;
      flex-direction: column;
      z-index: 20;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.open {
        transform: translateX(0);
      }
      
      @media (min-width: 1024px) {
        transform: translateX(0);
      }
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom right,
          rgba(var(--nova-primary-rgb), 0.05),
          transparent 70%
        );
        z-index: -1;
      }
    }

    .sidenav-header {
      height: 64px;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
      
      h2 {
        font-family: var(--nova-font-family-display);
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0;
        color: var(--nova-primary);
      }
    }

    .sidenav-close {
      background: transparent;
      border: none;
      color: var(--nova-on-surface);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      cursor: pointer;
      border-radius: 0.25rem;
    }
    
    .sidenav-nav {
      flex: 1;
      padding: 1rem 0;
      overflow-y: auto;
    }
    
    .nav-category {
      padding: 0 1.5rem;
      margin: 1.25rem 0 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(var(--nova-on-surface-rgb), 0.6);
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 0.75rem 1.5rem;
      color: var(--nova-on-surface);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: background-color 0.2s ease, color 0.2s ease;
      cursor: pointer;
      
      &:hover {
        background-color: rgba(var(--nova-surface-alt-rgb), 0.6);
      }
      
      &.active {
        color: var(--nova-primary);
        background-color: rgba(var(--nova-primary-rgb), 0.1);
        font-weight: 500;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: var(--nova-primary);
        }
      }
    }

    .nav-icon {
      margin-right: 0.75rem;
      font-size: 1.125rem;
      width: 24px;
      text-align: center;
      opacity: 0.9;
    }

    .sidenav-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid rgba(var(--nova-surface-alt-rgb), 0.3);
      color: rgba(var(--nova-on-surface-rgb), 0.7);
      
      .current-theme {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
      }
      
      .theme-indicator {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(var(--nova-on-surface-rgb), 0.2);
      }
      
      .version {
        font-size: 0.8125rem;
        margin: 0;
        opacity: 0.8;
      }
    }

    /* Content */
    .app-content {
      display: flex;
      flex: 1;
    }

    .main-content {
      flex: 1;
      padding: 2rem;
      max-width: 100%;
      
      @media (min-width: 768px) {
        padding: 2.5rem;
      }
    }

    /* Backdrop */
    .sidenav-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 15;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      
      &.visible {
        opacity: 1;
        visibility: visible;
      }
    }
  `]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Nova UI Demo';
  
  // Sidenav state
  sidenavOpen = true;
  isMobile = false;
  
  // Current theme
  currentTheme: NovaThemeBase = 'supernova';
  
  // References for touch handling
  @ViewChild('sidenav') sidenav?: ElementRef;
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 100; // Minimum distance for swipe detection
  private touchListenersAdded = false;
  
  constructor(
    private themeService: NovaThemeService,
    private router: Router,
    private renderer: Renderer2
  ) {}
  
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }
  
  ngOnInit(): void {
    // Set initial sidenav state based on screen size
    this.checkScreenSize();
    
    // Track current theme
    this.themeService.themeBase$.subscribe(theme => {
      this.currentTheme = theme;
    });
    
    // Close sidenav on navigation (mobile only)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobile) {
        this.sidenavOpen = false;
      }
    });
  }
  
  ngAfterViewInit(): void {
    // Add touch handlers for swipe to open/close sidenav
    this.setupTouchHandlers();
  }
  
  // Setup touch event handlers for swipe gestures
  private setupTouchHandlers(): void {
    if (!this.touchListenersAdded && this.sidenav) {
      // Touch events for the sidenav itself
      this.renderer.listen(this.sidenav.nativeElement, 'touchstart', (event: TouchEvent) => {
        this.touchStartX = event.touches[0].clientX;
      });
      
      this.renderer.listen(this.sidenav.nativeElement, 'touchend', (event: TouchEvent) => {
        this.touchEndX = event.changedTouches[0].clientX;
        this.handleSwipe();
      });
      
      // Touch events for the document (to detect swipe from edge)
      this.renderer.listen('document', 'touchstart', (event: TouchEvent) => {
        // Only track touch start for edge swipes
        if (event.touches[0].clientX < 20) {
          this.touchStartX = event.touches[0].clientX;
        }
      });
      
      this.renderer.listen('document', 'touchend', (event: TouchEvent) => {
        // Only handle edge swipes
        if (this.touchStartX < 20) {
          this.touchEndX = event.changedTouches[0].clientX;
          this.handleSwipe();
        }
      });
      
      this.touchListenersAdded = true;
    }
  }
  
  // Handle swipe gestures
  private handleSwipe(): void {
    if (this.isMobile) {
      const swipeDistance = this.touchEndX - this.touchStartX;
      
      // Swipe right (open sidenav)
      if (swipeDistance > this.swipeThreshold && !this.sidenavOpen) {
        this.sidenavOpen = true;
      }
      
      // Swipe left (close sidenav)
      if (swipeDistance < -this.swipeThreshold && this.sidenavOpen) {
        this.sidenavOpen = false;
      }
    }
  }
  
  // Check if we're on mobile and adjust sidenav
  private checkScreenSize(): void {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 1024;
    
    // If transitioning to mobile, close sidenav
    if (!wasMobile && this.isMobile) {
      this.sidenavOpen = false;
    }
    
    // If transitioning to desktop, open sidenav
    if (wasMobile && !this.isMobile) {
      this.sidenavOpen = true;
    }
  }
  
  // Toggle sidenav open/closed
  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
  
  // Close sidenav (used for backdrop and navigation on mobile)
  closeSidenav(): void {
    if (this.isMobile) {
      this.sidenavOpen = false;
    }
  }
  
  // Handle nav item clicks - close sidenav on mobile
  onNavItemClick(): void {
    if (this.isMobile) {
      this.closeSidenav();
    }
  }
  
  // Get the current theme's name
  getCurrentThemeName(): string {
    switch (this.currentTheme) {
      case 'supernova': return 'Supernova';
      case 'cosmic-blue': return 'Cosmic Blue';
      case 'nebula': return 'Nebula';
      case 'dark-matter': return 'Dark Matter';
      case 'black-hole': return 'Black Hole';
      default: return 'Theme';
    }
  }
  
  // Get the current theme's primary color for the indicator
  getCurrentThemeColor(): string {
    switch (this.currentTheme) {
      case 'supernova': return '#FF3823';
      case 'cosmic-blue': return '#1E90FF';
      case 'nebula': return '#F956C6';
      case 'dark-matter': return '#B085FF';
      case 'black-hole': return '#FF6B00';
      default: return '#FFFFFF';
    }
  }
}