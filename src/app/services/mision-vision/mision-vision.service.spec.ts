import { TestBed } from '@angular/core/testing';

import { MisionVisionService } from './mision-vision.service';

describe('MisionVisionService', () => {
  let service: MisionVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
