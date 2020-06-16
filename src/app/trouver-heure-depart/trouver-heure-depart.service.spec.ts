import { TestBed } from '@angular/core/testing';

import { TrouverHeureDepartService } from './trouver-heure-depart.service';

describe('TrouverHeureDepartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrouverHeureDepartService = TestBed.get(TrouverHeureDepartService);
    expect(service).toBeTruthy();
  });
});
