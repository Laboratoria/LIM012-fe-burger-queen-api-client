import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CounterProductsService } from './counter-products.service';

describe('CounterProductsService', () => {
  let service: CounterProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterProductsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CounterProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
