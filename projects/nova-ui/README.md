# Nova UI

Nova UI is a space-themed Angular component library that provides visually stunning UI components with cosmic-inspired design elements and animations.

## Features

- **Space-Inspired Design**: Visually distinctive cosmic themes with stellar effects
- **Light & Dark Modes**: Support for both light and dark mode versions of all themes
- **Theme System**: 4 base themes (Supernova, Cosmic Blue, Nebula, Dark Matter)
- **Responsive Components**: Works across different screen sizes
- **Modern Angular**: Built with standalone components for Angular 19+
- **Animation Options**: Various animation levels for interactive components
- **Accessibility**: Built with accessibility in mind

## Installation

```bash
# Install the library
npm install nova-ui
```

## Quick Start

### 1. Import styles in your `styles.scss`:

```scss
@import 'nova-ui/styles';
```

### 2. Use standalone components:

```typescript
import { Component } from '@angular/core';
import { NovaButtonComponent, NovaThemeTogglerComponent } from 'nova-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NovaButtonComponent, NovaThemeTogglerComponent],
  template: `
    <div class="container">
      <h1>My Nova UI App</h1>
      <nova-theme-toggler></nova-theme-toggler>
      
      <div class="button-section">
        <nova-button>Default Button</nova-button>
        <nova-button variant="cta">CTA Button</nova-button>
        <nova-button variant="link">Link Button</nova-button>
      </div>
    </div>
  `
})
export class AppComponent { }
```

## Button Component

The enhanced button component supports multiple appearance types, variants, sizes, and animation levels.

### Basic Usage

```html
<nova-button>Default Button</nova-button>
<nova-button variant="cta">CTA Button</nova-button>
<nova-button variant="link">Link Button</nova-button>
<nova-button [disabled]="true">Disabled Button</nova-button>
<nova-button [loading]="true">Loading Button</nova-button>
```

### Appearance Types

```html
<nova-button appearance="basic">Basic Button</nova-button>
<nova-button appearance="raised">Raised Button</nova-button>
<nova-button appearance="stroked">Stroked Button</nova-button>
<nova-button appearance="flat">Flat Button</nova-button>
<nova-button appearance="icon" icon="★">Icon Button</nova-button>
<nova-button appearance="fab" icon="+">FAB</nova-button>
<nova-button appearance="mini-fab" icon="+">Mini FAB</nova-button>
<nova-button appearance="extended-fab" icon="+">Extended FAB</nova-button>
```

### Sizes

```html
<nova-button size="small">Small Button</nova-button>
<nova-button size="medium">Medium Button</nova-button>
<nova-button size="large">Large Button</nova-button>
```

### Animation Levels

```html
<nova-button animation="none">No Animation</nova-button>
<nova-button animation="normal">Normal Animation</nova-button>
<nova-button animation="extra">Extra Animation</nova-button>
```

### Icons

```html
<nova-button icon="★">Button with Icon</nova-button>
<nova-button icon="→" iconPosition="right">Icon Right</nova-button>
```

## Theming

Nova UI comes with a powerful theming system that allows you to easily customize the appearance of your application.

### Theme Toggler Component

Add the theme toggler to your app to allow users to select theme and mode:

```html
<nova-theme-toggler></nova-theme-toggler>
```

### Theme Service

You can programmatically control the theme using the NovaThemeService:

```typescript
import { Component } from '@angular/core';
import { NovaThemeService } from 'nova-ui';

@Component({...})
export class AppComponent {
  constructor(private themeService: NovaThemeService) {
    // Set theme base (supernova, cosmic-blue, nebula, dark-matter)
    themeService.setThemeBase('nebula');
    
    // Set theme mode (light or dark)
    themeService.setThemeMode('light');
    
    // Toggle between light and dark mode
    themeService.toggleThemeMode();
    
    // Use system preference for light/dark mode
    themeService.setUseSystemPreference(true);
  }
}
```

## License

MIT