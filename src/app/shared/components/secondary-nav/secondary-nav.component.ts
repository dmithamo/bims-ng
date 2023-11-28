import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavItem } from '../../utils/types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './secondary-nav.component.html',
})
export class SecondaryNavComponent {
  @Input() navItems!: AppNavItem[];
}
