import { TestBed } from '@angular/core/testing';

import { KeysService } from './keys.service';

describe('BitcoinService', () => {
  let service: KeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
