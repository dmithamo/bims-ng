import { Routes } from '@angular/router';
import { APP_ROUTE } from '../shared/constants/routes.constants';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { title: 'Login', path: APP_ROUTE.login, component: LoginComponent },
      {
        title: 'Forgot password',
        component: ForgotPasswordComponent,
        path: APP_ROUTE.forgotPassword,
      },
      {
        title: 'Create password',
        path: APP_ROUTE.createPassword,
        component: CreatePasswordComponent,
      },
    ],
  },
];
