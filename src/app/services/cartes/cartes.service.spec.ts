import { TestBed } from '@angular/core/testing';
import { CartesService } from './cartes.service';

describe('CartesService', () => {
  let service: CartesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
