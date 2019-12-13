import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTourComponent } from './cart-tour.component';

describe('CartTourComponent', () => {
  let component: CartTourComponent;
  let fixture: ComponentFixture<CartTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
