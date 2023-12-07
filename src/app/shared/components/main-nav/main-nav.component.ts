import {
  Component,
  computed,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AppNavItem } from '../../utils/types';
import { APP_ROUTE } from '../../constants/routes.constants';
import { AuthService } from '../../../_services/auth/auth.service';
import { LogoComponent } from '../logo/logo.component';
import { filter, Subscription } from 'rxjs';

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
export class MainNavComponent implements OnDestroy {
  public showMenu = signal(false);
  public currentNavItem = signal<AppNavItem | null>(null);
  public showLogo = signal(false);

  public menuDrawerIconName = computed(() => {
    return this.showMenu() ? 'close' : 'bars';
  });

  @ViewChild('menu') menu: ElementRef | undefined;

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
  private routerEvents: Subscription;

  constructor(
    protected authService: AuthService,
    private router: Router,
  ) {
    this.routerEvents = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(event => {
        const currentPath = (event as NavigationEnd).url;

        this.showLogo.set(currentPath === APP_ROUTE.root);
        this.currentNavItem.set(
          this.navItems.find(item => currentPath.startsWith(`/${item.path}`)) ??
            null,
        );
      });
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }

  public toggleShowMenu = () => this.showMenu.set(!this.showMenu());
}
