// projects/nova-ui/src/lib/components/theme-toggler/theme-toggler.component.ts
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaThemeService, NovaThemeBase, NovaThemeMode } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nova-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class NovaThemeTogglerComponent implements OnInit {
  // Theme observables
  themeBase$!: Observable<NovaThemeBase>;
  themeMode$!: Observable<NovaThemeMode>;
  useSystemPreference$!: Observable<boolean>;
  
  // Available theme bases
  themeBases: { value: NovaThemeBase; label: string; }[] = [
    { value: 'supernova', label: 'Supernova' },
    { value: 'cosmic-blue', label: 'Cosmic Blue' },
    { value: 'nebula', label: 'Nebula' },
    { value: 'dark-matter', label: 'Dark Matter' }
  ];
  
  constructor(private themeService: NovaThemeService) { }
  
  ngOnInit(): void {
    this.themeBase$ = this.themeService.themeBase$;
    this.themeMode$ = this.themeService.themeMode$;
    this.useSystemPreference$ = this.themeService.useSystemPreference$;
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
      theme.value === this.themeService['themeBaseSubject'].value);
    return currentThemeBase ? currentThemeBase.label : 'Custom';
  }
}