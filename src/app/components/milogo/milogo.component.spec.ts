import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilogoComponent } from './milogo.component';

describe('MilogoComponent', () => {
  let component: MilogoComponent;
  let fixture: ComponentFixture<MilogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
