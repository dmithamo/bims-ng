import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { loggedInGuard } from './logged-in.guard';
import { AuthService } from '../../_services/auth/auth.service';
import { APP_ROUTE } from '../../shared/constants/routes.constants';

describe('loggedInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => loggedInGuard(...guardParameters));

  let fakeAuthService: jasmine.SpyObj<AuthService>;
  let fakeActiveRoute: ActivatedRouteSnapshot;
  let fakeRouterState: RouterStateSnapshot;
  let fakeRouter: Router;

  beforeEach(() => {
    fakeAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    fakeActiveRoute = {} as ActivatedRouteSnapshot;
    fakeRouterState = { url: 'fake/current-page' } as RouterStateSnapshot;
    fakeRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: fakeAuthService },
        { provide: Router, useValue: fakeRouter },
      ],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should redirect to auth/login if there is no logged in user', async function () {
    fakeAuthService.isLoggedIn.and.returnValue(Promise.resolve(false));
    const result = await executeGuard(fakeActiveRoute, fakeRouterState);

    expect(fakeRouter.navigate).toHaveBeenCalledWith(
      [APP_ROUTE.auth, APP_ROUTE.login],
      {
        queryParams: {
          redirectTo: 'fake/current-page',
        },
      },
    );

    expect(result).toBeFalse();
  });

  it('should return true if there is a logged in use', async function () {
    fakeAuthService.isLoggedIn.and.returnValue(Promise.resolve(true));
    const result = await executeGuard(fakeActiveRoute, fakeRouterState);

    expect(result).toBeTrue();
  });
});
