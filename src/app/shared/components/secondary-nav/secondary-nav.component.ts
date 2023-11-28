import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavItem } from '../../utils/types';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-secondary-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './secondary-nav.component.html',
})
export class SecondaryNavComponent {
  @Input() navItems!: AppNavItem[];
}
