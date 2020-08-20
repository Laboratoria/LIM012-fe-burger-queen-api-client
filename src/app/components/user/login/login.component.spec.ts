import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthConfigService } from '../../../services/auth-config.service';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let service: AuthConfigService;
  // let spy: any;

  beforeEach(async(() => {
    // service = new AuthConfigService();
    // component = new LoginComponent(service);

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [AuthConfigService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // service = new AuthConfigService( HttpClient );
    // component = new LoginComponent(service(HttpClient));

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // afterEach(() => {
  //   service = null;
  //   component = null;
  // });

  // it('canLogin returns true when the user is authenticated', () => {
  //   spy = spyOn(service, 'getUserLogged').and.returnValue(true);
  //   expect(component.login()).toBeTruthy();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
