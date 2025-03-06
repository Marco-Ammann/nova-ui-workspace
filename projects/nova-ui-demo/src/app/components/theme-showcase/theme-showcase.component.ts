import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NovaCardComponent,
  NovaCardHeaderComponent,
  NovaCardContentComponent,
  NovaButtonComponent,
  NovaThemeService,
  NovaThemeBase,
  NovaThemeMode,
} from 'nova-ui';
import { Subscription } from 'rxjs';

interface ThemeInfo {
  name: string;
  value: NovaThemeBase;
  description: string;
  inspiration: string;
  primaryColor: string;
  secondaryColor: string;
  accentColors: string[];
}

@Component({
  selector: 'app-theme-showcase',
  standalone: true,
  imports: [
    CommonModule,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaButtonComponent,
  ],
  template: `
    <div class="component-page">
      <h1 class="component-title">Cosmic Themes</h1>
      <p class="component-description">
        Explore Nova UI's space-inspired themes, each with light and dark
        variants
      </p>

      <!-- Current Theme Display -->
      <nova-card class="current-theme-card">
        <nova-card-header
          [title]="'Current Theme: ' + getCurrentThemeName()"
        ></nova-card-header>
        <nova-card-content>
          <p class="theme-description">{{ getCurrentThemeDescription() }}</p>

          <div class="theme-colors">
            <div class="color-grid">
              <div class="color-card primary">
                <div
                  class="color-sample"
                  [style.background]="getCurrentThemePrimaryColor()"
                ></div>
                <div class="color-info">
                  <span class="color-name">Primary</span>
                  <span class="color-value">{{
                    getCurrentThemePrimaryColor()
                  }}</span>
                </div>
              </div>

              <div class="color-card secondary">
                <div
                  class="color-sample"
                  [style.background]="getCurrentThemeSecondaryColor()"
                ></div>
                <div class="color-info">
                  <span class="color-name">Secondary</span>
                  <span class="color-value">{{
                    getCurrentThemeSecondaryColor()
                  }}</span>
                </div>
              </div>

              <div
                *ngFor="
                  let color of getCurrentThemeAccentColors();
                  let i = index
                "
                class="color-card accent"
              >
                <div class="color-sample" [style.background]="color"></div>
                <div class="color-info">
                  <span class="color-name">Accent {{ i + 1 }}</span>
                  <span class="color-value">{{ color }}</span>
                </div>
              </div>
            </div>

            <div class="mode-toggle">
              <div class="mode-label">Theme Mode</div>
              <div class="mode-buttons">
                <button
                  class="mode-button"
                  [class.active]="currentMode === 'light'"
                  (click)="setThemeMode('light')"
                >
                  <span class="mode-icon">☀️</span>
                  <span>Light</span>
                </button>

                <button
                  class="mode-button"
                  [class.active]="currentMode === 'dark'"
                  (click)="setThemeMode('dark')"
                >
                  <span class="mode-icon">🌙</span>
                  <span>Dark</span>
                </button>
              </div>
            </div>
          </div>
        </nova-card-content>
      </nova-card>

      <!-- Available Themes -->
      <h2 class="section-title">Available Themes</h2>
      <p class="section-description">
        Click on any theme to apply it. Each theme is inspired by real cosmic
        phenomena.
      </p>

      <div class="themes-grid">
        <nova-card
          *ngFor="let theme of themes"
          class="theme-card"
          [class.active-theme]="isCurrentTheme(theme.value)"
          [hoverable]="true"
          (click)="setTheme(theme.value)"
        >
          <div class="theme-card-header">
            <div
              class="theme-dot"
              [style.background]="theme.primaryColor"
            ></div>
            <h3 class="theme-name">{{ theme.name }}</h3>
          </div>

          <nova-card-content>
            <p class="theme-card-description">{{ theme.description }}</p>

            <div class="theme-colors-preview">
              <div
                class="theme-color primary"
                [style.background]="theme.primaryColor"
              ></div>
              <div
                class="theme-color secondary"
                [style.background]="theme.secondaryColor"
              ></div>
              <div
                *ngFor="let color of theme.accentColors"
                class="theme-color accent"
                [style.background]="color"
              ></div>
            </div>

            <div class="theme-inspiration">
              <h4>Astronomical Inspiration</h4>
              <p>{{ theme.inspiration }}</p>
            </div>

            <div class="theme-apply">
              <nova-button
                variant="cta"
                size="small"
                [disabled]="isCurrentTheme(theme.value)"
              >
                {{
                  isCurrentTheme(theme.value) ? 'Active Theme' : 'Apply Theme'
                }}
              </nova-button>
            </div>
          </nova-card-content>
        </nova-card>
      </div>

      <!-- Theme Usage -->
      <nova-card class="usage-card">
        <nova-card-header
          title="Using Themes in Your Application"
        ></nova-card-header>
        <nova-card-content>
          <div class="usage-grid">
            <div class="usage-item">
              <h3 class="usage-title">1. Set Theme Programmatically</h3>
              <div class="usage-content">
                <p>
                  Use the NovaThemeService to set themes in your components:
                </p>
                <div class="usage-code">
                  constructor(private themeService: NovaThemeService) {{ '{' }}
                  {{ '}' }}

                  // Set theme base setTheme(theme: NovaThemeBase): void
                  {{ '{' }}
                  this.themeService.setThemeBase(theme);
                  {{ '}' }}

                  // Toggle between light and dark mode toggleMode(): void
                  {{ '{' }}
                  this.themeService.toggleThemeMode();
                  {{ '}' }}
                </div>
              </div>
            </div>

            <div class="usage-item">
              <h3 class="usage-title">2. Add Theme Toggler Component</h3>
              <div class="usage-content">
                <p>Use the built-in theme toggler in your app:</p>
                <div class="usage-code">
                  &lt;nova-theme-toggler&gt;&lt;/nova-theme-toggler&gt;
                </div>
              </div>
            </div>

            <div class="usage-item">
              <h3 class="usage-title">3. Access CSS Variables</h3>
              <div class="usage-content">
                <p>Use theme variables in your custom components:</p>
                <div class="usage-code">
                  .my-component {{ '{' }}
                  color: var(--nova-primary); background: var(--nova-surface);
                  border: 1px solid var(--nova-surface-alt);
                  {{ '}' }}
                </div>
              </div>
            </div>
          </div>
        </nova-card-content>
      </nova-card>
    </div>
  `,
  styles: [
    `
      .component-page {
        max-width: 1100px;
        margin: 0 auto;
      }

      .component-title {
        font-family: var(--nova-font-family-display);
        font-size: 2.5rem;
        margin: 0 0 0.5rem;
        background: linear-gradient(
          90deg,
          var(--nova-primary),
          var(--nova-secondary)
        );
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
        line-height: 1.6;
      }

      .section-title {
        font-family: var(--nova-font-family-display);
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        color: var(--nova-primary);
      }

      .section-description {
        font-size: 1rem;
        margin: 0 0 1.5rem;
        color: var(--nova-on-background);
        opacity: 0.8;
      }

      /* Current theme card */
      .current-theme-card {
        margin-bottom: 2.5rem;
        border: 1px solid rgba(var(--nova-primary-rgb), 0.3);
        box-shadow: 0 0 25px rgba(var(--nova-primary-rgb), 0.1);
        position: relative;
        overflow: hidden;
      }

      .current-theme-card::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 200px;
        background: radial-gradient(
          circle at top right,
          rgba(var(--nova-primary-rgb), 0.15),
          transparent 70%
        );
        pointer-events: none;
        z-index: 0;
      }

      .theme-description {
        margin-bottom: 1.5rem;
        font-size: 1.0625rem;
      }

      .theme-colors {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 1.5rem;
        flex: 1;
      }

      .color-card {
        display: flex;
        flex-direction: column;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .color-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .color-card.primary {
        border-top: 3px solid var(--nova-primary);
      }

      .color-card.secondary {
        border-top: 3px solid var(--nova-secondary);
      }

      .color-card.accent {
        border-top: 3px solid var(--nova-accent1);
      }

      .color-sample {
        height: 100px;
        position: relative;
        overflow: hidden;
      }

      .color-sample::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle at 30% 30%,
          rgba(255, 255, 255, 0.15),
          transparent 70%
        );
        opacity: 0.8;
      }

      .color-info {
        padding: 1rem;
        background-color: var(--nova-surface-alt);
      }

      .color-name {
        display: block;
        font-weight: 600;
        margin-bottom: 0.25rem;
        font-family: var(--nova-font-family-display);
      }

      .color-value {
        font-size: 0.875rem;
        font-family: var(--nova-font-family-mono);
        opacity: 0.8;
      }

      /* Mode toggle */
      .mode-toggle {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 200px;
      }

      .mode-label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-family: var(--nova-font-family-display);
      }

      .mode-buttons {
        display: flex;
        gap: 0.5rem;
      }

      .mode-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        border: 1px solid rgba(var(--nova-surface-alt-rgb), 0.5);
        background-color: var(--nova-surface);
        color: var(--nova-on-surface);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .mode-button:hover {
        background-color: rgba(var(--nova-surface-alt-rgb), 0.5);
      }

      .mode-button.active {
        background-color: var(--nova-primary);
        color: var(--nova-on-primary);
        border-color: transparent;
      }

      .mode-icon {
        font-size: 1rem;
      }

      /* Themes grid */
      .themes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .theme-card {
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .theme-card.active-theme {
        border-color: var(--nova-primary);
        box-shadow: 0 0 0 2px var(--nova-primary),
          0 10px 30px rgba(0, 0, 0, 0.15);
      }

      .theme-card-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem 1.5rem 0;
      }

      .theme-dot {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(var(--nova-on-surface-rgb), 0.2);
      }

      .theme-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        font-family: var(--nova-font-family-display);
      }

      .theme-card-description {
        margin-bottom: 1.25rem;
        font-size: 0.9375rem;
        line-height: 1.5;
      }

      .theme-colors-preview {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }

      .theme-color {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(var(--nova-on-surface-rgb), 0.1);
      }

      .theme-color.primary {
        width: 2.5rem;
        height: 2.5rem;
      }

      .theme-inspiration {
        background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        border-left: 3px solid var(--nova-primary);

        h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          color: var(--nova-primary);
        }

        p {
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.5;
        }
      }

      .theme-apply {
        display: flex;
        justify-content: center;
      }

      /* Usage section */
      .usage-card {
        margin-bottom: 2rem;
      }

      .usage-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .usage-item {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .usage-title {
        font-size: 1.125rem;
        margin: 0;
        color: var(--nova-primary);
      }

      .usage-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .usage-content p {
        margin: 0;
      }

      .usage-code {
        font-family: var(--nova-font-family-mono);
        font-size: 0.875rem;
        background-color: rgba(var(--nova-surface-alt-rgb), 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        white-space: pre;
        overflow-x: auto;
      }

      @media (max-width: 768px) {
        .color-grid {
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        }

        .themes-grid {
          grid-template-columns: 1fr;
        }

        .usage-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ThemeShowcaseComponent implements OnInit, OnDestroy {
  currentTheme!: NovaThemeBase;
  currentMode!: NovaThemeMode;
  currentThemeInfo: ThemeInfo | null = null;
  private subscriptions: Subscription[] = [];

  // Theme information with scientific descriptions
  themes: ThemeInfo[] = [
    {
      name: 'Supernova',
      value: 'supernova',
      description:
        'Inspired by the explosive death of massive stars, creating brilliant hot colors from nuclear fusion.',
      inspiration:
        'When a massive star explodes, it creates intense heat and radiation across the electromagnetic spectrum, generating vibrant reds, oranges, and yellows.',
      primaryColor: '#FF3823',
      secondaryColor: '#FF8E20',
      accentColors: ['#FFC60A', '#DB4355', '#9D30E5'],
    },
    {
      name: 'Cosmic Blue',
      value: 'cosmic-blue',
      description:
        'Based on the hottest blue giant stars and interstellar ice formations.',
      inspiration:
        'The hottest and brightest stars in the universe appear blue, while cosmic ice crystals reflect blue light. This represents the cold yet intense energy of deep space.',
      primaryColor: '#1E90FF',
      secondaryColor: '#36D6FF',
      accentColors: ['#78A9FF', '#00C8E6', '#7070FB'],
    },
    {
      name: 'Nebula',
      value: 'nebula',
      description:
        'Modeled after colorful stellar nurseries and gas clouds where new stars form.',
      inspiration:
        'Emission nebulae like the Orion Nebula contain ionized gases that emit their own light - hydrogen glows red/pink, oxygen produces blues and greens, and dust creates amber reflections.',
      primaryColor: '#F956C6',
      secondaryColor: '#945FFB',
      accentColors: ['#60C6FF', '#2DE5A7', '#FFAF51'],
    },
    {
      name: 'Dark Matter',
      value: 'dark-matter',
      description:
        "Inspired by the mysterious substance that makes up 27% of the universe but can't be directly observed.",
      inspiration:
        'While invisible, dark matter reveals itself through gravitational effects. Scientific visualizations often represent it using purples and deep blues to show its distribution through the cosmos.',
      primaryColor: '#B085FF',
      secondaryColor: '#6A55C2',
      accentColors: ['#CDB2FF', '#4E4B8C', '#8C95E4'],
    },
    {
      name: 'Black Hole',
      value: 'black-hole',
      description:
        'Based on the most extreme gravitational objects in the universe, where light cannot escape.',
      inspiration:
        'The event horizon of a black hole is pitch black, but the accretion disk of matter spiraling into it becomes superheated, glowing brilliantly in oranges, blues and yellows due to intense gravitational forces.',
      primaryColor: '#FF6B00',
      secondaryColor: '#01C2FF',
      accentColors: ['#FFD500', '#9A4CFF', '#FF2975'],
    },
  ];

  constructor(
    private themeService: NovaThemeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Get current theme
    this.currentTheme = this.themeService.getThemeBase();
    this.updateCurrentThemeInfo();

    // Subscribe to theme base changes
    const themeBaseSub = this.themeService.themeBase$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateCurrentThemeInfo();
      this.cdr.markForCheck();
    });

    // Subscribe to theme mode changes
    const themeModeSub = this.themeService.themeMode$.subscribe((mode) => {
      this.currentMode = mode;
      this.cdr.markForCheck();
    });

    this.subscriptions.push(themeBaseSub, themeModeSub);
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // Set theme base
  setTheme(theme: NovaThemeBase): void {
    this.themeService.setThemeBase(theme);
  }

  // Set theme mode (light/dark)
  setThemeMode(mode: NovaThemeMode): void {
    this.themeService.setThemeMode(mode);
  }

  // Check if theme is current
  isCurrentTheme(theme: NovaThemeBase): boolean {
    return this.currentTheme === theme;
  }

  // Get current theme name
  getCurrentThemeName(): string {
    return this.currentThemeInfo?.name || '';
  }

  // Get current theme description
  getCurrentThemeDescription(): string {
    return this.currentThemeInfo?.description || '';
  }

  // Get current theme primary color
  getCurrentThemePrimaryColor(): string {
    return this.currentThemeInfo?.primaryColor || '';
  }

  // Get current theme secondary color
  getCurrentThemeSecondaryColor(): string {
    return this.currentThemeInfo?.secondaryColor || '';
  }

  // Get current theme accent colors
  getCurrentThemeAccentColors(): string[] {
    return this.currentThemeInfo?.accentColors || [];
  }

  // Helper method to update current theme info
  private updateCurrentThemeInfo(): void {
    this.currentThemeInfo =
      this.themes.find((t) => t.value === this.currentTheme) || null;
  }
}
