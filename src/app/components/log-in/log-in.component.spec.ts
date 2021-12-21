import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserServiceService } from '../services/user-service.service';
import { UserServiceServiceMock } from 'src/test/mock/services/user-service.mock';

fdescribe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
      imports:[
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      providers:[
        {provide: UserServiceService, useClass: UserServiceServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title', () => {
    expect(component.componentName).toBe("log-in")
  });

  it('should contain default value for loginForm', () => {
    expect(component.loginForm.value).toEqual ({ email:'',password:''});
  });

  // it('should login user if the form is valid and should navigate to the dashboard', () => {
  //   component.loginForm.setValue({ email:'admin',password:'admin'});
  //   spyOn(component.router, 'navigate');
  //   component.onSubmit();
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/dashboard/get-all-books'])
    
  // })

});
