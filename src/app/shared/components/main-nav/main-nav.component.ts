import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../../ui-components/svg-icon/svg-icon.component';
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
      path: 'dashboard',
      icon: 'home',
      name: 'home',
      permissions: [],
    },
    {
      path: 'transactions',
      icon: 'list',
      name: 'transactions',
      permissions: [],
    },
    {
      path: 'budget',
      icon: 'wallet',
      name: 'budget',
      permissions: [],
    },
    {
      path: 'profile',
      icon: 'user',
      name: 'profile',
      permissions: [],
    },
  ];
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url.startsWith(`/${route}`);
  }
}
