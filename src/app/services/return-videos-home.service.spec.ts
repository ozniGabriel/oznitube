import { TestBed } from '@angular/core/testing';

import { ReturnVideosHomeService } from './return-videos-home.service';

describe('ReturnVideosHomeService', () => {
  let service: ReturnVideosHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnVideosHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
