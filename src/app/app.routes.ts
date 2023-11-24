import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./budget/budget.routes').then(m => m.budgetRoutes),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./transaction/transaction.routes').then(m => m.transactionRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
