import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ViewTicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class TicketsModule { }
