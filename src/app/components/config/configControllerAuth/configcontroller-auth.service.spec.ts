import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigcontrollerAuthService } from './configcontroller-auth.service';

describe('ConfigcontrollerAuthService', () => {
  let service: ConfigcontrollerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigcontrollerAuthService]
    });
    service = TestBed.inject(ConfigcontrollerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
