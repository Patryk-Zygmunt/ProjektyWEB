import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourShortInfoComponent } from './tour-short-info.component';

describe('TourComponent', () => {
  let component: TourShortInfoComponent;
  let fixture: ComponentFixture<TourShortInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourShortInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
