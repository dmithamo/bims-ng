import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AppNavItem } from '../../utils/types';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent {
  protected navItems: AppNavItem[] = [
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'chart-present',
      permissions: [],
    },
    {
      path: '/transactions',
      name: 'transactions',
      icon: 'card',
      permissions: [],
    },
    {
      path: '/budget',
      name: 'budget',
      icon: 'clipboard',
      permissions: [],
    },
    {
      path: '/profile',
      name: 'profile',
      icon: 'user',
      permissions: [],
    },
  ];
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url.startsWith(`/${route}`);
  }
}
