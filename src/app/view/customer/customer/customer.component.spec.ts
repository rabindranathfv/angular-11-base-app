import { ComponentFixture, TestBed, getTestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CustomerComponent } from './customer.component';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';

import { CustomersService } from 'src/app/services/customers/customers.service';
import { CustomerFacade } from './../store/facade/customer.facade';

import { CustomerAppState } from './../store/reducers/customers.reducer';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let customersService: CustomersService;
  let customerFacade: CustomerFacade;
  let store: MockStore;
  const initialState = { customers: undefined, errors: undefined };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent,
       ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        SearchFilterBarModule,
        ViewHeaderModule,
        InfoCardModule,
        MetricCardModule,
        NoDataModule,
        HttpClientTestingModule
      ],
      providers: [
        CustomersService,
        CustomerFacade,
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    customersService = TestBed.inject(CustomersService);
    customerFacade = TestBed.inject(CustomerFacade);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
