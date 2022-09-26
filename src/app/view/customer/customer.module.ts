import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { TranslateModule } from '@ngx-translate/core';

import { StoreModule } from '@ngrx/store';
import * as fromCustomersReducer from './store/reducers/customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/effects/customer.effects';
import { CustomerFacade } from './store/facade/customer.facade';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'src/app/components/color-picker/color-picker.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { AlertModule } from 'src/app/components/alert/alert.module';

@NgModule({
  declarations: [CustomerComponent, ViewCustomerComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ViewHeaderModule,
    MetricCardModule,
    InfoCardModule,
    SearchFilterBarModule,
    TabsetModule,
    StepperModule,
    ColorPickerModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NoDataModule,
    FormsModule,
    TranslateModule,
    AlertModule,
    StoreModule.forFeature(
      fromCustomersReducer.customersFeatureKey,
      fromCustomersReducer.CustomerAppReducer),
    EffectsModule.forFeature([CustomerEffects])
  ], providers: [CustomerFacade]
})
export class CustomerModule { }
