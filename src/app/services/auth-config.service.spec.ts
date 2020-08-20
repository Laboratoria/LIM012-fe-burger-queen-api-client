import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthConfigService } from './auth-config.service';

describe('AuthConfigService', () => {
  let service: AuthConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConfigService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
