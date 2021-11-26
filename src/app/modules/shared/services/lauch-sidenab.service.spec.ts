import { TestBed } from '@angular/core/testing';

import { LauchSidenabService } from './lauch-sidenab.service';

describe('LauchSidenabService', () => {
  let service: LauchSidenabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LauchSidenabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
