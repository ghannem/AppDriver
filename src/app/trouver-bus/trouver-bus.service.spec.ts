import { TestBed } from '@angular/core/testing';

import { TrouverBusService } from './trouver-bus.service';

describe('TrouverBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrouverBusService = TestBed.get(TrouverBusService);
    expect(service).toBeTruthy();
  });
});
