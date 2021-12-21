import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBooksComponent } from './get-all-books.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';


fdescribe('GetAllBooksComponent', () => {
  let component: GetAllBooksComponent;
  let fixture: ComponentFixture<GetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBooksComponent ],

      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NgxPaginationModule
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
