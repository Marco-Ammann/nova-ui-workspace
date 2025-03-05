import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaThemeService, NovaThemeBase, NovaThemeMode } from '../../services/theme.service';
import { NovaButtonComponent } from '../button/button.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'nova-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NovaButtonComponent]
})
export class NovaThemeTogglerComponent implements OnInit, OnDestroy {
  // Theme observables
  themeBase$!: Observable<NovaThemeBase>;
  themeMode$!: Observable<NovaThemeMode>;
  useSystemPreference$!: Observable<boolean>;
  
  // Current theme values
  private currentThemeBase: NovaThemeBase = 'supernova';
  private subscriptions: Subscription[] = [];
  
  // UI state
  isExpanded = false;
  
  // Available theme bases with accurate colors
  themeBases: { value: NovaThemeBase; label: string; color: string; }[] = [
    { value: 'supernova', label: 'Supernova', color: '#FF3823' },
    { value: 'cosmic-blue', label: 'Cosmic Blue', color: '#1E90FF' },
    { value: 'nebula', label: 'Nebula', color: '#F956C6' },
    { value: 'dark-matter', label: 'Dark Matter', color: '#B085FF' },
    { value: 'black-hole', label: 'Black Hole', color: '#FF6B00' }
  ];
  
  constructor(private themeService: NovaThemeService) {}
  
  ngOnInit(): void {
    this.themeBase$ = this.themeService.themeBase$;
    this.themeMode$ = this.themeService.themeMode$;
    this.useSystemPreference$ = this.themeService.useSystemPreference$;
    
    // Track current theme base
    const themeBaseSub = this.themeService.themeBase$.subscribe(theme => {
      this.currentThemeBase = theme;
    });
    
    this.subscriptions.push(themeBaseSub);
  }
  
  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  
  // Toggle expanded state
  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
  
  // Close panel
  closePanel(): void {
    this.isExpanded = false;
  }
  
  // Set theme base (color scheme)
  setThemeBase(themeBase: NovaThemeBase): void {
    this.themeService.setThemeBase(themeBase);
  }
  
  // Set theme mode (light/dark)
  setThemeMode(mode: NovaThemeMode): void {
    this.themeService.setThemeMode(mode);
    // When directly setting a mode, disable system preference
    this.themeService.setUseSystemPreference(false);
  }
  
  // Toggle system preference usage
  setUseSystemPreference(use: boolean): void {
    this.themeService.setUseSystemPreference(use);
  }
  
  // Get human-readable theme label for current theme base
  getThemeLabel(): string {
    const currentThemeBase = this.themeBases.find(theme => 
      theme.value === this.currentThemeBase);
    return currentThemeBase ? currentThemeBase.label : 'Custom';
  }
  
  // Get color for current theme
  getCurrentThemeColor(): string {
    const currentThemeBase = this.themeBases.find(theme => 
      theme.value === this.currentThemeBase);
    return currentThemeBase ? currentThemeBase.color : '#FFFFFF';
  }
}