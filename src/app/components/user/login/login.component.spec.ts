import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
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
});

// import {LoginComponent} from './login.component';

// class MockAuthService { 
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// describe('Login component', () => {

//   let component: LoginComponent;
//   let service: MockAuthService;

//   beforeEach(() => { 
//     service = new MockAuthService();
//     component = new LoginComponent(service);
//   });

//   afterEach(() => {
//     service = null;
//     component = null;
//   });


//   it('canLogin returns true when the user is authenticated', () => {
//     service.authenticated = true; 
//     expect(component.isLogged()).toBeTruthy();
//   });


// });