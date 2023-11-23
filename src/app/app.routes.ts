import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./domains/auth/auth-routes').then(mod => mod.authRoutes),
  },
];
