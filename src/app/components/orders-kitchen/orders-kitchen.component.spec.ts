import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersKitchenComponent } from './orders-kitchen.component';

describe('OrdersKitchenComponent', () => {
  let component: OrdersKitchenComponent;
  let fixture: ComponentFixture<OrdersKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
