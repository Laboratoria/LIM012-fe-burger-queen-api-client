import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from './../../services/products/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { BillOrdersComponent } from './bill-orders.component';

describe('BillOrdersComponent', () => {
  let component: BillOrdersComponent;
  let fixture: ComponentFixture<BillOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOrdersComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [CounterProductsService, ProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
