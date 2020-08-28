import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ConfigcontrollerAuthService } from './config-controller-auth.service';

describe('ConfigControllerAuthService', () => {
  let service: ConfigcontrollerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigcontrollerAuthService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ConfigcontrollerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
