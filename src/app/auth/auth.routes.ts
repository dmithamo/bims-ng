import { Routes } from '@angular/router';
import { APP_ROUTE } from '../shared/constants/routes.constants';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { title: 'Login', path: APP_ROUTE.login, component: LoginComponent },
    ],
  },
];
