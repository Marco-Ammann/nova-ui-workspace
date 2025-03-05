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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NovaThemeTogglerComponent,
    NovaButtonComponent
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  // Sidenav state
  sidenavOpen = true;
  isMobile = false;
  
  // Current theme
  currentTheme: NovaThemeBase = 'supernova';
  
  // Navigation items - updated to include full set of pages
  navItems = [
    { name: 'Overview', route: 'overview', icon: '🏠' },
    { name: 'Theme Showcase', route: 'themes', icon: '🎨' },
    { name: 'Buttons', route: 'buttons', icon: '🔘' },
    { name: 'Cards', route: 'cards', icon: '🃏' },
    { name: 'Forms', route: 'forms', icon: '📝' },
    { name: 'Inputs', route: 'inputs', icon: '⌨️' },
    { name: 'Checkboxes', route: 'checkboxes', icon: '✓' },
    { name: 'Radio Buttons', route: 'radio-buttons', icon: '⭕' },
    { name: 'Toggles', route: 'toggles', icon: '🔄' }
  ];
  
  // Theme options
  themeOptions = [
    { 
      label: 'Supernova', 
      value: 'supernova' as NovaThemeBase, 
      color: '#FF3823',
      description: 'Vibrant reds and oranges from stellar explosions'
    },
    { 
      label: 'Cosmic Blue', 
      value: 'cosmic-blue' as NovaThemeBase, 
      color: '#1E90FF',
      description: 'Cool blues from hot blue stars and interstellar ice'
    },
    { 
      label: 'Nebula', 
      value: 'nebula' as NovaThemeBase, 
      color: '#F956C6',
      description: 'Vibrant colors from stellar nurseries and gas clouds'
    },
    { 
      label: 'Dark Matter', 
      value: 'dark-matter' as NovaThemeBase, 
      color: '#B085FF',
      description: 'Mysterious purples from invisible cosmic matter'
    },
    { 
      label: 'Black Hole', 
      value: 'black-hole' as NovaThemeBase, 
      color: '#FF6B00',
      description: 'Intense colors from accretion disks and event horizons'
    }
  ];
  
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
  
  // Set theme
  setTheme(theme: NovaThemeBase): void {
    this.themeService.setThemeBase(theme);
    // Close sidenav on mobile after theme change
    if (this.isMobile) {
      this.closeSidenav();
    }
  }
}