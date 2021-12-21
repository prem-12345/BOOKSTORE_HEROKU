import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartComponent } from './my-cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartComponent ],

      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
