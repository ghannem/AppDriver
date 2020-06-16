import { TestBed } from '@angular/core/testing';

import { TrouverLigneService } from './trouver-ligne.service';

describe('TrouverLigneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrouverLigneService = TestBed.get(TrouverLigneService);
    expect(service).toBeTruthy();
  });
});
