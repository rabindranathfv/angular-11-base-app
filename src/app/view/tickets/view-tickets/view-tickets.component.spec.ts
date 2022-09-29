import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { TicketsRoutingModule } from '../tickets-routing.module';
import { TicketFacade } from '../store/facade/ticket.facade';

import { ViewTicketsComponent } from './view-tickets.component';

let store: MockStore;
const initialState = { users: undefined, error: undefined };

describe('ViewTicketsComponent', () => {
  let component: ViewTicketsComponent;
  let fixture: ComponentFixture<ViewTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTicketsComponent ],
      imports: [
        DataTableModule,
        TranslateModule.forRoot(),
        TicketsRoutingModule,
        ReactiveFormsModule
      ],
      providers: [
        TicketFacade,
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
