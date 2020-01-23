import { TestBed } from '@angular/core/testing';

import { Act8ServiceService } from './act-8-service.service';

describe('Act8ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Act8ServiceService = TestBed.get(Act8ServiceService);
    expect(service).toBeTruthy();
  });
});
