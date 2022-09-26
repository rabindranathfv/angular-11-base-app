import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddOwnerComponent } from './add-owner.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { OwnersService } from 'src/app/services/owners/owners.service';
import { OwnerFacade } from '../store/facade/owner.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { UserFacade } from '../../user/store/facade/user.facade';

let store: MockStore;
const initialState = { owners: undefined, errors: undefined };

describe('AddOwnerComponent', () => {
  let component: AddOwnerComponent;
  let fixture: ComponentFixture<AddOwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOwnerComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        ViewHeaderModule,
        StepperModule,
        AlertModule,
        StepperModule,
        TranslateModule.forRoot(),
        ViewHeaderModule,
        ReactiveFormsModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers: [
        OwnersService,
        OwnerFacade,
        UserFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
