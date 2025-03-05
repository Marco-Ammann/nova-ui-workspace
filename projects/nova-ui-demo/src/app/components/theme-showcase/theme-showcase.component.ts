import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NovaCardComponent, 
  NovaCardHeaderComponent, 
  NovaCardContentComponent, 
  NovaButtonComponent,
  NovaThemeService,
  NovaThemeBase
} from 'nova-ui';

interface ThemeInfo {
  name: string;
  value: NovaThemeBase;
  description: string;
  inspiration: string;
  primaryColor: string;
  secondaryColor: string;
  accentColors: string[];
  background: string;
  surface: string;
}

@Component({
  selector: 'app-theme-showcase',
  standalone: true,
  imports: [
    CommonModule,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaButtonComponent
  ],
  templateUrl: './theme-showcase.component.html',
  styleUrls: ['./theme-showcase.component.scss']
})
export class ThemeShowcaseComponent implements OnInit {
  currentTheme!: NovaThemeBase;
  
  // Comprehensive theme information with scientific descriptions
  themes: ThemeInfo[] = [
    {
      name: 'Supernova',
      value: 'supernova',
      description: 'Inspired by the explosive death of massive stars, creating brilliant hot colors from nuclear fusion.',
      inspiration: 'When a massive star explodes, it creates intense heat and radiation across the electromagnetic spectrum, generating vibrant reds, oranges, and yellows.',
      primaryColor: '#FF3823',
      secondaryColor: '#FF8E20',
      accentColors: ['#FFC60A', '#DB4355', '#9D30E5'],
      background: '#0A0910',
      surface: '#151220'
    },
    {
      name: 'Cosmic Blue',
      value: 'cosmic-blue',
      description: 'Based on the hottest blue giant stars and interstellar ice formations.',
      inspiration: 'The hottest and brightest stars in the universe appear blue, while cosmic ice crystals reflect blue light. This represents the cold yet intense energy of deep space.',
      primaryColor: '#1E90FF',
      secondaryColor: '#36D6FF',
      accentColors: ['#78A9FF', '#00C8E6', '#7070FB'],
      background: '#041425',
      surface: '#0A1E35'
    },
    {
      name: 'Nebula',
      value: 'nebula',
      description: 'Modeled after colorful stellar nurseries and gas clouds where new stars form.',
      inspiration: 'Emission nebulae like the Orion Nebula contain ionized gases that emit their own light - hydrogen glows red/pink, oxygen produces blues and greens, and dust creates amber reflections.',
      primaryColor: '#F956C6',
      secondaryColor: '#945FFB',
      accentColors: ['#60C6FF', '#2DE5A7', '#FFAF51'],
      background: '#0B0A15',
      surface: '#171631'
    },
    {
      name: 'Dark Matter',
      value: 'dark-matter',
      description: 'Inspired by the mysterious substance that makes up 27% of the universe but can\'t be directly observed.',
      inspiration: 'While invisible, dark matter reveals itself through gravitational effects. Scientific visualizations often represent it using purples and deep blues to show its distribution through the cosmos.',
      primaryColor: '#B085FF',
      secondaryColor: '#6A55C2',
      accentColors: ['#CDB2FF', '#4E4B8C', '#8C95E4'],
      background: '#08080E',
      surface: '#101018'
    },
    {
      name: 'Black Hole',
      value: 'black-hole',
      description: 'Based on the most extreme gravitational objects in the universe, where light cannot escape.',
      inspiration: 'The event horizon of a black hole is pitch black, but the accretion disk of matter spiraling into it becomes superheated, glowing brilliantly in oranges, blues and yellows due to intense gravitational forces.',
      primaryColor: '#FF6B00',
      secondaryColor: '#01C2FF',
      accentColors: ['#FFD500', '#9A4CFF', '#FF2975'],
      background: '#040405',
      surface: '#0A0A0D'
    }
  ];
  
  constructor(private themeService: NovaThemeService) {}
  
  ngOnInit(): void {
    // Get current theme
    this.currentTheme = this.themeService.getThemeBase();
    
    // Subscribe to theme changes
    this.themeService.themeBase$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  
  // Set theme when clicking on a theme card
  setTheme(theme: NovaThemeBase): void {
    this.themeService.setThemeBase(theme);
  }
  
  // Check if theme is current
  isCurrentTheme(theme: NovaThemeBase): boolean {
    return this.currentTheme === theme;
  }
}