import { TestBed } from '@angular/core/testing';

import { Plants1Service } from './plants1.service';

describe('Plants1Service', () => {
  let service: Plants1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Plants1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
