import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { TicketFacade } from './store/facade/ticket.facade';
import { TicketsRoutingModule } from './tickets-routing.module';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import * as fromTicketsReducer from '../tickets/store/reducer/ticket.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TicketEffects } from './store/effect/ticket.effects';

@NgModule({
  declarations: [ViewTicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    DataTableModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromTicketsReducer.ticketsFeatureKey,
      fromTicketsReducer.TicketAppReducer),
    EffectsModule.forFeature([TicketEffects]),
  ],
  providers: [
    TicketFacade
  ]
})
export class TicketsModule { }
