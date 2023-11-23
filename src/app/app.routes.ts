import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/auth/auth.routes').then(m => m.authRoutes),
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./components/budget/budget.routes').then(m => m.budgetRoutes),
  },
];
