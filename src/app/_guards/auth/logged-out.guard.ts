import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';

export const loggedOutGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);

  return !(await authService.isLoggedIn());
};
