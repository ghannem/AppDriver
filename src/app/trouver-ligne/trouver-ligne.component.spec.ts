import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverLigneComponent } from './trouver-ligne.component';

describe('TrouverLigneComponent', () => {
  let component: TrouverLigneComponent;
  let fixture: ComponentFixture<TrouverLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouverLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
