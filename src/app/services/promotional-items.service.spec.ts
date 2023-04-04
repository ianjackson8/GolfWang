import { TestBed } from '@angular/core/testing';

import { PromotionalItemsService } from './promotional-items.service';

describe('PromotionalItemsService', () => {
  let service: PromotionalItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionalItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
