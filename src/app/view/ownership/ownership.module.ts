import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnershipRoutingModule } from './ownership-routing.module';
import { OwnershipComponent } from './ownership/ownership.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';

import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { ViewOwnershipComponent } from './view-ownership/view-ownership.component';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { StepperModule } from '../../components/stepper/stepper.module';
import * as fromOwnershipReducer from './store/reducer/ownership.reducer';
import { AddOwnershipComponent } from './add-ownership/add-ownership.component';
import { EditOwnershipComponent } from './edit-ownership/edit-ownership.component';
import { EffectsModule } from '@ngrx/effects';
import { OwnershipEffects } from './store/effect/ownership.effects';
import { StoreModule } from '@ngrx/store';
import { OwnershipFacade } from './store/facade/ownership.facade';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnerFacade } from '../owner/store/facade/owner.facade';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import * as fromOwnerReducer from '../owner/store/reducer/owner.reducer';
import { OwnerEffects } from '../owner/store/effect/owner.effects';


@NgModule({
  declarations: [
    OwnershipComponent,
    AddOwnershipComponent,
    ViewOwnershipComponent,
    EditOwnershipComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwnershipRoutingModule,
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
      fromOwnerReducer.ownersFeatureKey,
      fromOwnerReducer.OwnerAppReducer),
    StoreModule.forFeature(
      fromOwnershipReducer.ownershipsFeatureKey,
      fromOwnershipReducer.OwnershipAppReducer),
    EffectsModule.forFeature([OwnershipEffects, OwnerEffects]),
  ],
  providers: [
    OwnershipFacade,
    AuthFacade,
    OwnerFacade
  ]
})
export class OwnershipModule {}
