import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NovaTheme, NovaThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovaThemeTogglerComponent implements OnInit {
  
  currentTheme$!: Observable<NovaTheme>;
  
  themes: { value: NovaTheme; label: string; }[] = [
    { value: 'supernova', label: 'Supernova' },
    { value: 'cosmic-blue', label: 'Cosmic Blue' },
    { value: 'nebula', label: 'Nebula' },
    { value: 'dark-matter', label: 'Dark Matter' }
  ];
  
  constructor(private themeService: NovaThemeService) { }
  
  ngOnInit(): void {
    this.currentTheme$ = this.themeService.currentTheme$;
  }
  
  setTheme(theme: NovaTheme): void {
    this.themeService.setTheme(theme);
  }
}