import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SecondaryNavComponent } from '../shared/components/secondary-nav/secondary-nav.component';
import { AppNavItem } from '../shared/utils/types';
import { APP_ROUTE } from '../shared/constants/routes.constants';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SecondaryNavComponent],
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  public readonly secondaryNavItems: AppNavItem[] = [
    {
      path: APP_ROUTE.incomes,
      label: 'Incomes',
      icon: 'folder-plus',
      permissions: [],
    },
    {
      path: APP_ROUTE.expenses,
      label: 'Expenses',
      icon: 'folder-minus',
      permissions: [],
    },
    {
      path: APP_ROUTE.balances,
      label: 'Balances',
      icon: 'briefcase',
      permissions: [],
    },
  ];
}
