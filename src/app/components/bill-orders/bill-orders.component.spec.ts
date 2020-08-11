import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOrdersComponent } from './bill-orders.component';

describe('BillOrdersComponent', () => {
  let component: BillOrdersComponent;
  let fixture: ComponentFixture<BillOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOrdersComponent ]
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
