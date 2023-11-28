import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTE } from './shared/constants/routes.constants';
import { loggedInGuard } from './_guards/auth/logged-in.guard';
import { loggedOutGuard } from './_guards/auth/logged-out.guard';

export const routes: Routes = [
  {
    path: APP_ROUTE.auth,
    canActivate: [loggedOutGuard],
    loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: '',
    canActivate: [loggedInGuard],
    children: [
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
          import('./transaction/transaction.routes').then(
            m => m.transactionRoutes,
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
