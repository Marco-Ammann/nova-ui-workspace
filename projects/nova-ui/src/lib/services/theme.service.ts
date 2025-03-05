// projects/nova-ui/src/lib/services/theme.service.ts
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

// Available themes
export type NovaThemeBase = 'supernova' | 'cosmic-blue' | 'nebula' | 'dark-matter';
// Mode (light or dark)
export type NovaThemeMode = 'light' | 'dark';
// Theme as string representation
export type NovaTheme = `${NovaThemeBase}-${NovaThemeMode}`;

@Injectable({
  providedIn: 'root'
})
export class NovaThemeService {
  // Storage keys
  private readonly THEME_BASE_KEY = 'nova-ui-theme-base';
  private readonly THEME_MODE_KEY = 'nova-ui-theme-mode';
  private readonly SYSTEM_PREF_KEY = 'nova-ui-use-system-preference';
  
  // Known theme base classes
  private readonly THEME_BASE_CLASSES = [
    'theme-supernova',
    'theme-cosmic-blue',
    'theme-nebula',
    'theme-dark-matter'
  ];
  
  // Known theme mode classes
  private readonly THEME_MODE_CLASSES = [
    'theme-light',
    'theme-dark'
  ];
  
  // Theme subjects
  private themeBaseSubject = new BehaviorSubject<NovaThemeBase>(this.getInitialThemeBase());
  private themeModeSubject = new BehaviorSubject<NovaThemeMode>(this.getInitialThemeMode());
  private useSystemPreferenceSubject = new BehaviorSubject<boolean>(this.getInitialSystemPreference());
  
  // Observables for components to subscribe to
  themeBase$: Observable<NovaThemeBase> = this.themeBaseSubject.asObservable();
  themeMode$: Observable<NovaThemeMode> = this.themeModeSubject.asObservable();
  useSystemPreference$: Observable<boolean> = this.useSystemPreferenceSubject.asObservable();
  
  // Media query for detecting user's system preference
  private systemDarkModeQuery: MediaQueryList | null = null;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only run this in browser environments
    if (isPlatformBrowser(this.platformId)) {
      // Set up system preference detection
      this.systemDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Listen for system preference changes
      this.systemDarkModeQuery.addEventListener('change', this.handleSystemPreferenceChange.bind(this));
      
      // Initial theme setup
      this.applyCurrentTheme();
    }
  }
  
  // Get current full theme string
  getCurrentTheme(): NovaTheme {
    return `${this.themeBaseSubject.value}-${this.themeModeSubject.value}` as NovaTheme;
  }
  
  // Set the theme base (supernova, cosmic-blue, etc.)
  setThemeBase(themeBase: NovaThemeBase): void {
    if (themeBase !== this.themeBaseSubject.value) {
      this.themeBaseSubject.next(themeBase);
      this.saveThemeBase(themeBase);
      this.applyCurrentTheme();
    }
  }
  
  // Set the theme mode (light or dark)
  setThemeMode(mode: NovaThemeMode): void {
    if (mode !== this.themeModeSubject.value) {
      this.themeModeSubject.next(mode);
      this.saveThemeMode(mode);
      
      // If we're manually setting a mode, disable system preference
      if (this.useSystemPreferenceSubject.value) {
        this.setUseSystemPreference(false);
      } else {
        this.applyCurrentTheme();
      }
    }
  }
  
  // Toggle between light and dark mode
  toggleThemeMode(): void {
    const newMode = this.themeModeSubject.value === 'dark' ? 'light' : 'dark';
    this.setThemeMode(newMode);
  }
  
  // Enable/disable using system preference for light/dark mode
  setUseSystemPreference(useSystemPref: boolean): void {
    if (useSystemPref !== this.useSystemPreferenceSubject.value) {
      this.useSystemPreferenceSubject.next(useSystemPref);
      this.saveSystemPreference(useSystemPref);
      
      // If enabling system preference, update mode based on system
      if (useSystemPref && isPlatformBrowser(this.platformId) && this.systemDarkModeQuery) {
        const systemMode: NovaThemeMode = this.systemDarkModeQuery.matches ? 'dark' : 'light';
        this.themeModeSubject.next(systemMode);
      }
      
      this.applyCurrentTheme();
    }
  }
  
  // Apply the current theme to the DOM - FIXED VERSION
  private applyCurrentTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const themeBase = this.themeBaseSubject.value;
    const themeMode = this.themeModeSubject.value;
    
    // Clean up existing theme classes properly
    this.removeAllThemeClasses();
    
    // Add new theme classes
    document.body.classList.add(`theme-${themeBase}`);
    document.body.classList.add(`theme-${themeMode}`);
    
    // Set a data attribute for easier theme targeting in CSS
    document.body.setAttribute('data-theme', `${themeBase}-${themeMode}`);
  }
  
  // Helper to remove all known theme classes
  private removeAllThemeClasses(): void {
    // First, remove all base theme classes
    this.THEME_BASE_CLASSES.forEach(className => {
      document.body.classList.remove(className);
    });
    
    // Then, remove all mode classes
    this.THEME_MODE_CLASSES.forEach(className => {
      document.body.classList.remove(className);
    });
  }
  
  // Handle system dark mode preference changes
  private handleSystemPreferenceChange(e: MediaQueryListEvent): void {
    if (this.useSystemPreferenceSubject.value) {
      const systemMode: NovaThemeMode = e.matches ? 'dark' : 'light';
      this.themeModeSubject.next(systemMode);
      this.applyCurrentTheme();
    }
  }
  
  // Storage methods
  private getInitialThemeBase(): NovaThemeBase {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.THEME_BASE_KEY) as NovaThemeBase;
      return saved || 'supernova';
    }
    return 'supernova';
  }
  
  private getInitialThemeMode(): NovaThemeMode {
    if (isPlatformBrowser(this.platformId)) {
      // Check if using system preference
      if (this.getInitialSystemPreference()) {
        // Return based on system preference if possible
        if (this.systemDarkModeQuery) {
          return this.systemDarkModeQuery.matches ? 'dark' : 'light';
        }
      }
      
      // Otherwise use saved preference or default to dark
      const saved = localStorage.getItem(this.THEME_MODE_KEY) as NovaThemeMode;
      return saved || 'dark';
    }
    return 'dark';
  }
  
  private getInitialSystemPreference(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.SYSTEM_PREF_KEY);
      return saved ? saved === 'true' : false;
    }
    return false;
  }
  
  private saveThemeBase(themeBase: NovaThemeBase): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_BASE_KEY, themeBase);
    }
  }
  
  private saveThemeMode(mode: NovaThemeMode): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_MODE_KEY, mode);
    }
  }
  
  private saveSystemPreference(useSystemPref: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.SYSTEM_PREF_KEY, useSystemPref.toString());
    }
  }
}