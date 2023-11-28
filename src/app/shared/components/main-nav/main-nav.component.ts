import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AppNavItem } from '../../utils/types';
import { APP_ROUTE } from '../../constants/routes.constants';

type MainNavItem = { icon: string; label: string } & AppNavItem;

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent {
  protected navItems: MainNavItem[] = [
    {
      path: APP_ROUTE.dashboard,
      label: 'dashboard',
      icon: 'chart-present',
      permissions: [],
    },
    {
      path: APP_ROUTE.transactions,
      label: 'transactions',
      icon: 'card',
      permissions: [],
    },
    {
      path: APP_ROUTE.budgets,
      label: 'budgets',
      icon: 'clipboard',
      permissions: [],
    },
    {
      path: APP_ROUTE.profile,
      label: 'profile',
      icon: 'user',
      permissions: [],
    },
  ];
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url.startsWith(`/${route}`);
  }
}
