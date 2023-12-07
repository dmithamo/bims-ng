import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AppNavItem } from '../../utils/types';
import { APP_ROUTE } from '../../constants/routes.constants';
import { AuthService } from '../../../_services/auth/auth.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SvgIconComponent,
    LogoComponent,
  ],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent {
  public showMenu = signal(false);
  public menuDrawerIconName = computed(() => {
    return this.showMenu() ? 'close' : 'bars';
  });

  protected navItems: AppNavItem[] = [
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

  constructor(protected authService: AuthService) {}

  public toggleShowMenu = () => this.showMenu.set(!this.showMenu());
}
