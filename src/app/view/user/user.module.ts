import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { CustomerRoutingModule } from '../customer/customer-routing.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effect/user.effects';
import { UserFacade } from './store/facade/user.facade';
import { StoreModule } from '@ngrx/store';
import * as fromUserReducer from './store/reducer/user.reducer';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewUserComponent } from './view-user/view-user.component';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { AlertModule } from 'src/app/components/alert/alert.module';


@NgModule({
  declarations: [UserComponent, CreateUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ViewHeaderModule,
    MetricCardModule,
    InfoCardModule,
    SearchFilterBarModule,
    NoDataModule,
    ReactiveFormsModule,
    StepperModule,
    TranslateModule,
    NgbDropdownModule,
    TabsetModule,
    AlertModule,

    StoreModule.forFeature(
      fromUserReducer.usersFeatureKey,
      fromUserReducer.UserAppReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    UserFacade
  ]
})
export class UserModule { }
