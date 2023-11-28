import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { APP_ROUTE } from '../shared/constants/routes.constants';

export const authRoutes: Routes = [
  {
    path: APP_ROUTE.login,
    title: 'Login',
    component: LoginComponent,
  },
];
