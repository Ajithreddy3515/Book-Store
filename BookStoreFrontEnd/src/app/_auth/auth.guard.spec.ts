import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let userAuthService: UserAuthService;
  let router: Router;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: UserAuthService, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: UserService, useValue: {} }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    userAuthService = TestBed.inject(UserAuthService);
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  // Additional tests...
});
