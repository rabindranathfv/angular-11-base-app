import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddOwnershipComponent } from './add-ownership.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { OwnershipsService } from 'src/app/services/ownerships/ownerships.service';
import { OwnershipFacade } from '../store/facade/ownership.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { OwnerFacade } from '../../owner/store/facade/owner.facade';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

let store: MockStore;
const initialState = { ownerships: undefined, errors: undefined };

describe('AddOwnershipComponent', () => {
  let component: AddOwnershipComponent;
  let fixture: ComponentFixture<AddOwnershipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOwnershipComponent ],
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
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
      ],
      providers: [
        OwnershipsService,
        OwnershipFacade,
        OwnerFacade,
        AuthFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
