import { TestBed } from '@angular/core/testing';

import { ConfigcontrollerAuthService } from './configcontroller-auth.service';

describe('ConfigcontrollerAuthService', () => {
  let service: ConfigcontrollerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigcontrollerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
