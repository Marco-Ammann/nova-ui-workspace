import { Component } from '@angular/core';
import { NovaButtonComponent } from 'nova-ui';
import { NovaThemeTogglerComponent } from '../../../nova-ui/src/lib/components/theme-toggler/theme-toggler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaCardComponent, NovaCardHeaderComponent, NovaCardContentComponent, NovaCardFooterComponent } from 'projects/nova-ui/src/lib/components/card/card.component';
import { NovaInputComponent } from 'projects/nova-ui/src/lib/components/input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NovaButtonComponent, NovaThemeTogglerComponent,
    NovaCardComponent,
    NovaCardHeaderComponent,
    NovaCardContentComponent,
    NovaCardFooterComponent,
    NovaInputComponent,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AppComponent {
  title = 'Nova UI Demo';
  userName = '';
  email = '';
}
