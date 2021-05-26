import { TestBed } from '@angular/core/testing';

import { CreationColisService } from './creation-colis.service';

describe('CreationColisService', () => {
  let service: CreationColisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationColisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
