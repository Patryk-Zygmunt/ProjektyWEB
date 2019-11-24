import { TestBed } from '@angular/core/testing';

import { TourGenerationService } from './tour-generation.service';

describe('TourGenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourGenerationService = TestBed.get(TourGenerationService);
    expect(service).toBeTruthy();
  });
});
