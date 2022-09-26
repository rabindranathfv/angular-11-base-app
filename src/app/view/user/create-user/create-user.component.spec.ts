import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { UserFacade } from '../store/facade/user.facade';

import { CreateUserComponent } from './create-user.component';
let store: MockStore;
const initialState = { users: undefined, error: undefined };

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports : [
        StepperModule,
        TranslateModule.forRoot(),
        ViewHeaderModule,
        ReactiveFormsModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
        AlertModule
      ],
      providers: [
        UsersService,
        UserFacade,
        AuthFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
