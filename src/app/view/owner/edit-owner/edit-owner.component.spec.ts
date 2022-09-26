import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditOwnerComponent } from './edit-owner.component';
import { TranslateModule } from '@ngx-translate/core';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { OwnerFacade } from '../store/facade/owner.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;
const initialState = { owners: undefined, errors: undefined };

describe('EditOwnerComponent', () => {
  let component: EditOwnerComponent;
  let fixture: ComponentFixture<EditOwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOwnerComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        ViewHeaderModule,
        StepperModule,
        AlertModule,
        TranslateModule.forRoot(),
        ViewHeaderModule,
        ReactiveFormsModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers: [
        OwnerFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
