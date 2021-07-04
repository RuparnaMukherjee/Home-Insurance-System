import { TestBed } from '@angular/core/testing';

import { PolicyHolderServiceService } from './policy-holder-service.service';

describe('PolicyHolderServiceService', () => {
  let service: PolicyHolderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyHolderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
