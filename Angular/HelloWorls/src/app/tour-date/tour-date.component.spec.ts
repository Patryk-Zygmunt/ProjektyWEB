import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDateComponent } from './tour-date.component';

describe('TourDateComponent', () => {
  let component: TourDateComponent;
  let fixture: ComponentFixture<TourDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
