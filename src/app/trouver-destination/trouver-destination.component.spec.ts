import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverDestinationComponent } from './trouver-destination.component';

describe('TrouverDestinationComponent', () => {
  let component: TrouverDestinationComponent;
  let fixture: ComponentFixture<TrouverDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouverDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
