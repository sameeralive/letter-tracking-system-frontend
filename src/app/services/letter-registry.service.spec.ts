import { TestBed } from '@angular/core/testing';

import { LetterRegistryService } from './letter-registry.service';

describe('LetterRegistryService', () => {
  let service: LetterRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
