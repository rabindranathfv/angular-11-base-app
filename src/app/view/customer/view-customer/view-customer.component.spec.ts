import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCustomerComponent } from './view-customer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { CustomerFacade } from '../store/facade/customer.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
let store: MockStore;
const initialState = { customers: undefined, errors: undefined };

describe('ViewCustomerComponent', () => {
  let component: ViewCustomerComponent;
  let fixture: ComponentFixture<ViewCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerComponent ],
      imports: [
        TranslateModule.forRoot(),
        TabsetModule,
        ViewHeaderModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
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
    fixture = TestBed.createComponent(ViewCustomerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
