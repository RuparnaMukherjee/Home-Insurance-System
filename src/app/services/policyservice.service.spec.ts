import { TestBed } from '@angular/core/testing';

import { PolicyServiceService } from './policyservice.service';

describe('PolicyServiceService', () => {
  let service: PolicyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
