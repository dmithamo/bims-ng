import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTE } from './shared/constants/routes.constants';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: APP_ROUTE.dashboard,
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(m => m.dashboardRoutes),
  },
  {
    path: APP_ROUTE.budgets,
    loadChildren: () =>
      import('./budget/budget.routes').then(m => m.budgetRoutes),
  },
  {
    path: APP_ROUTE.transactions,
    loadChildren: () =>
      import('./transaction/transaction.routes').then(m => m.transactionRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
