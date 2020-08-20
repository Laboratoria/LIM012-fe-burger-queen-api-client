import { TestBed } from '@angular/core/testing';
import { ConfigcontrollerAuthService } from '../../services/auth/config-controller-auth.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

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
