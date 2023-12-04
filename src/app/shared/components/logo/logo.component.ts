import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { RouterLink } from '@angular/router';
import { APP_ROUTE } from '../../constants/routes.constants';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, RouterLink],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() disableClick?: boolean = false;
  protected readonly APP_ROUTE = APP_ROUTE;
}
