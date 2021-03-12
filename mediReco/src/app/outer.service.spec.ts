import { TestBed } from '@angular/core/testing';

import { OuterService } from './outer.service';

describe('OuterService', () => {
  let service: OuterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OuterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
