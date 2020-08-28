import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Item } from 'src/app/interfaces/item';
import { of } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected products', () => {
    const expectedProducts: Item[] =
      [{ _id: '1',
        name: 'Cafe',
        price: 5.00,
        image: 'cafe.jpg',
        type: 'breakfast',
        quantity: 1
      }];

    httpClientSpy.get.and.returnValue(of(expectedProducts));

    service.getListProduct().subscribe(
      products => expect(products).toEqual(expectedProducts, 'expected products'),
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
