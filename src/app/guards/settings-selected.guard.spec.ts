import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { settingsSelectedGuard } from './settings-selected.guard';

describe('settingsSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => settingsSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
