import { TestBed } from '@angular/core/testing';
import { AuthConfigService } from './auth-config.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';


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
