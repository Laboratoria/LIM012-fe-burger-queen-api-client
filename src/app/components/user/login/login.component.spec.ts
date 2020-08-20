import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthConfigService } from '../../../services/auth-config.service';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/* describe('LoginComponent', () => {
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

});*/

/* describe('LoginComponent', () => {
  let compLogin: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConfigService],
    });

    compLogin = TestBed.inject(LoginComponent); // * inject compLogin instance
  });

  it('#login() should change from empty obj to obj user with email and password', () => {
    const user = {
      email: '',
      password: ''
    };

    const userLogged = {
      email: 'Carmen',
      password: '123456'
    };

    // const comp = new LoginComponent({}, '111111.555555.666666');
    expect(compLogin.user).toBe(user, 'empty at first');
    compLogin.login();
    expect(compLogin.user).toBe(userLogged, 'carmen log in after click');
  });

  // it('#login() should set #message to "is on"', () => {
  //   const comp = new LoginComponent();
  //   expect(comp.message).toMatch(/is off/i, 'off at first');
  //   comp.login();
  //   expect(comp.message).toMatch(/is on/i, 'on after clicked');
  // });
}); */

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const token = '1111.2222.22222';

  // let user = {
  //   email: '',
  //   password: ''
  // };

  // const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [AuthConfigService]
      // imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('invalid_form');
  });

  it('should validate correct user and password', () => {
    component.user = {
      email: 'test@test.com',
      password: '123456'
    };
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual(token);
  });

  it('should deny access with incorrect password', () => {
    component.user = {
      email: '',
      password: ''
    };
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('login_invalid');
  });
});
