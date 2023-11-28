import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { APP_ROUTE } from '../../shared/constants/routes.constants';

export const loggedInGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedOut = !(await authService.isLoggedIn());

  if (isLoggedOut) {
    await router.navigate([APP_ROUTE.auth, APP_ROUTE.login], {
      queryParams: {
        redirectTo: state.url || undefined,
      },
    });
    return false;
  }

  return true;
};
