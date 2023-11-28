import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { APP_ROUTE } from '../../shared/constants/routes.constants';

export const loggedOutGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = await authService.isLoggedIn();

  if (isLoggedIn) {
    await router.navigate([APP_ROUTE.dashboard]);

    return false;
  }

  return true;
};
