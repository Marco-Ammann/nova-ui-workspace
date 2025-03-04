import { Component } from '@angular/core';
import { NovaButtonComponent } from 'nova-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NovaButtonComponent]
})
export class AppComponent {
  title = 'Nova UI Demo';
}