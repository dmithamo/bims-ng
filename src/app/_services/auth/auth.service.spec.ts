import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthRepository } from '../../_repositories/auth/auth.repository';

describe('AuthService', () => {
  let service: AuthService;
  let fakeAuthRepo: AuthRepository;

  beforeEach(() => {
    fakeAuthRepo = jasmine.createSpyObj('AuthRepository', ['sessionId']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthRepository,
          useValue: fakeAuthRepo,
        },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validateSession', function () {
    it('should return true for a valid sessionId', function () {});

    it('should return false if there is no sessionId', function () {});

    it('should return false and logout if there is an invalid sessionId', function () {});
  });
});
