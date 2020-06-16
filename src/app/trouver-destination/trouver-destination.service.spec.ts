import { TestBed } from '@angular/core/testing';

import { TrouverDestinationService } from './trouver-destination.service';

describe('TrouverDestinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrouverDestinationService = TestBed.get(TrouverDestinationService);
    expect(service).toBeTruthy();
  });
});
