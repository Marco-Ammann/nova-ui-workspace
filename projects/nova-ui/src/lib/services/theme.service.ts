import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NovaTheme = 'supernova' | 'cosmic-blue' | 'nebula' | 'dark-matter';

@Injectable({
  providedIn: 'root'
})
export class NovaThemeService {
  
  private readonly THEME_STORAGE_KEY = 'nova-ui-theme';
  private themeSubject = new BehaviorSubject<NovaTheme>(this.getInitialTheme());
  
  currentTheme$ = this.themeSubject.asObservable();
  
  constructor() {
    // Apply the initial theme
    this.applyTheme(this.themeSubject.value);
  }
  
  setTheme(theme: NovaTheme): void {
    if (theme !== this.themeSubject.value) {
      this.themeSubject.next(theme);
      this.applyTheme(theme);
      this.saveTheme(theme);
    }
  }
  
  private getInitialTheme(): NovaTheme {
    // Try to get theme from localStorage
    const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY) as NovaTheme;
    
    // Return saved theme or default to supernova
    return savedTheme || 'supernova';
  }
  
  private applyTheme(theme: NovaTheme): void {
    // Remove any existing theme classes
    document.body.classList.remove('theme-supernova', 'theme-cosmic-blue', 'theme-nebula', 'theme-dark-matter');
    
    // Add the new theme class
    document.body.classList.add(`theme-${theme}`);
    
    // Import the theme SCSS dynamically
    this.loadThemeStyles(theme);
  }
  
  private loadThemeStyles(theme: NovaTheme): void {
    // We'll handle theme CSS imports in the global SCSS
    // This method is here for future extensibility
    
    // For now, we'll rely on CSS classes and preloaded styles
    // If needed, could dynamically load theme modules in the future
  }
  
  private saveTheme(theme: NovaTheme): void {
    localStorage.setItem(this.THEME_STORAGE_KEY, theme);
  }
}
