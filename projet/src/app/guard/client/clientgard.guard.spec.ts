import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { clientgardGuard } from './clientgard.guard';

describe('clientgardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clientgardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
