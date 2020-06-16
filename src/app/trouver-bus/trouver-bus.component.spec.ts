import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverBusComponent } from './trouver-bus.component';

describe('TrouverBusComponent', () => {
  let component: TrouverBusComponent;
  let fixture: ComponentFixture<TrouverBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouverBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
