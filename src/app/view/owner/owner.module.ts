import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner/owner.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';

import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { StepperModule } from './../../components/stepper/stepper.module';
import * as fromOwnerReducer from './store/reducer/owner.reducer';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { EffectsModule } from '@ngrx/effects';
import { OwnerEffects } from './store/effect/owner.effects';
import { StoreModule } from '@ngrx/store';
import { OwnerFacade } from './store/facade/owner.facade';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { UserFacade } from '../user/store/facade/user.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UserEffects } from '../user/store/effect/user.effects';
import * as fromUserReducer from '../user/store/reducer/user.reducer';

@NgModule({
  declarations: [
    OwnerComponent,
    AddOwnerComponent,
    ViewOwnerComponent,
    EditOwnerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwnerRoutingModule,
    InfoCardModule,
    NoDataModule,
    TranslateModule,
    HttpClientModule,
    ViewHeaderModule,
    SearchFilterBarModule,
    TabsetModule,
    NgbDropdownModule,
    AlertModule,
    StepperModule,
    StoreModule.forFeature(
      fromUserReducer.usersFeatureKey,
      fromUserReducer.UserAppReducer),
    StoreModule.forFeature(
      fromOwnerReducer.ownersFeatureKey,
      fromOwnerReducer.OwnerAppReducer),
    EffectsModule.forFeature([OwnerEffects, UserEffects]),
  ],
  providers: [
    OwnerFacade,
    UserFacade
  ]
})
export class OwnerModule {}
