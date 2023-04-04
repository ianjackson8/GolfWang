import { TestBed } from '@angular/core/testing';

import { FlagshipService } from './flagship.service';

describe('FlagshipService', () => {
  let service: FlagshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
