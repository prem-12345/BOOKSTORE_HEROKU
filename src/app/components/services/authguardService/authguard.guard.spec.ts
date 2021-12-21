import { TestBed } from '@angular/core/testing';

import { AuthguardGuard } from './authguard.guard';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
