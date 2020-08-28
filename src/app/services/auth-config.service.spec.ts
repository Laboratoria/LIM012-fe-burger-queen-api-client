import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthConfigService } from './auth-config.service';
import { LoginComponent } from '../components/user/login/login.component';

describe('AuthConfigService', () => {
  let service: AuthConfigService;
  // let component: LoginComponent;
  // let spy: any;
  // let httpClientSpy: { get: jasmine.Spy };
  // let heroService: AuthConfigService;

  beforeEach(() => {
    // service = new AuthConfigService();
    // component = new LoginComponent(service);

    TestBed.configureTestingModule({
      providers: [AuthConfigService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthConfigService);

      // TODO: spy on other methods too
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // heroService = new AuthConfigService(httpClientSpy as any);
  });

  // afterEach(() => {
  //   service = null;
  //   component = null;
  // });

  // it('canLogin returns true when the user is authenticated', () => {
  //   spy = spyOn(service, 'getUserLogged').and.returnValue(true);
  //   expect(component.login()).toBeTruthy();
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
