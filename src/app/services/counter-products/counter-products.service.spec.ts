import { TestBed } from '@angular/core/testing';

import { CounterProductsService } from './counter-products.service';

describe('CounterProductsService', () => {
  let service: CounterProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
