import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacedComponent } from './orderplaced.component';

fdescribe('OrderplacedComponent', () => {
  let component: OrderplacedComponent;
  let fixture: ComponentFixture<OrderplacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
