import { CanActivateFn } from '@angular/router';

export const loggedOutGuard: CanActivateFn = () => {
  return true;
};
