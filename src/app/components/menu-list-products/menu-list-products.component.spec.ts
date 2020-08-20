import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuListProductsComponent } from './menu-list-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from '../../services/products/products.service';

describe('MenuListProductsComponent', () => {
  let component: MenuListProductsComponent;
  let fixture: ComponentFixture<MenuListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListProductsComponent ],
      imports: [HttpClientTestingModule],
      providers: [CounterProductsService, ProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
