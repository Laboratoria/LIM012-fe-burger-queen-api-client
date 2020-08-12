import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListProductsComponent } from './menu-list-products.component';

describe('MenuListProductsComponent', () => {
  let component: MenuListProductsComponent;
  let fixture: ComponentFixture<MenuListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListProductsComponent ]
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
