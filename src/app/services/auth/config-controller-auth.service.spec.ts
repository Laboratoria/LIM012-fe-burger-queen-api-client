import { TestBed } from '@angular/core/testing';

import { ConfigControllerAuthService } from './config-controller-auth.service';

describe('ConfigControllerAuthService', () => {
  let service: ConfigControllerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigControllerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
