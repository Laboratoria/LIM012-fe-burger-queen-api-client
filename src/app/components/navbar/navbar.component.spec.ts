import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { AuthConfigService } from 'src/app/services/auth-config.service';
import { NavbarComponent } from './navbar.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterRoutingModule } from '../../../app/router–routing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      // providers: [ AuthConfigService ],
      imports: [ HttpClientTestingModule, RouterRoutingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
