import { TestBed } from '@angular/core/testing';

import { TccService } from './tcc.service';

describe('TccService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TccService = TestBed.get(TccService);
    expect(service).toBeTruthy();
  });
});
