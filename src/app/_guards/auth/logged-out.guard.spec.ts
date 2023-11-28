import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { loggedOutGuard } from './logged-out.guard';
import { AuthService } from '../../_services/auth/auth.service';
import { APP_ROUTE } from '../../shared/constants/routes.constants';

describe('loggedOutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => loggedOutGuard(...guardParameters));

  let fakeAuthService: jasmine.SpyObj<AuthService>;
  let fakeActivatedRoute: ActivatedRouteSnapshot;
  let fakeRouterState: RouterStateSnapshot;
  let fakeRouter: Router;

  beforeEach(() => {
    fakeAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    fakeActivatedRoute = {} as ActivatedRouteSnapshot;
    fakeRouterState = {} as RouterStateSnapshot;
    fakeRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return false if there is a user logged in and redirect to /dashboard', async function () {
    fakeAuthService.isLoggedIn.and.returnValue(Promise.resolve(true));
    const result = await executeGuard(fakeActivatedRoute, fakeRouterState);

    expect(fakeRouter.navigate).toHaveBeenCalledWith([APP_ROUTE.dashboard]);
    expect(result).toBe(false);
  });
  it('should return true if there is no user logged in', async function () {
    fakeAuthService.isLoggedIn.and.returnValue(Promise.resolve(false));
    const result = await executeGuard(fakeActivatedRoute, fakeRouterState);

    expect(result).toBe(true);
  });
});
