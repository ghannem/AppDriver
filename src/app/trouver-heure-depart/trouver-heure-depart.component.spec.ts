import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverHeureDepartComponent } from './trouver-heure-depart.component';

describe('TrouverHeureDepartComponent', () => {
  let component: TrouverHeureDepartComponent;
  let fixture: ComponentFixture<TrouverHeureDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouverHeureDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverHeureDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
