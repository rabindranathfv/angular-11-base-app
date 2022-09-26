import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateCustomerComponent } from './create-customer.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ColorPickerModule } from 'src/app/components/color-picker/color-picker.module';
import { TranslateModule } from '@ngx-translate/core';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFacade } from '../store/facade/customer.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AlertModule } from 'src/app/components/alert/alert.module';
let store: MockStore;
const initialState = { customers: undefined, errors: undefined };

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerComponent ],
      imports : [
        StepperModule,
        ColorPickerModule,
        TranslateModule.forRoot(),
        ViewHeaderModule,
        ReactiveFormsModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
        AlertModule
      ],
      providers: [
        CustomersService,
        CustomerFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
