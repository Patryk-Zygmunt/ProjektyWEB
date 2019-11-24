import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBaseComponent } from './tour-base.component';

describe('TourBaseComponent', () => {
  let component: TourBaseComponent;
  let fixture: ComponentFixture<TourBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
