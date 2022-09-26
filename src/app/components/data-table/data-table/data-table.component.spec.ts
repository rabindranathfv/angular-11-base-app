import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ConfigAppFacade } from 'src/app/view/layout/state/configApp.facade';
import { appReducers } from 'src/app/app.reducer';
import { StoreModule } from '@ngrx/store';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule,
        StoreModule.forRoot( appReducers ),
      ],
      declarations: [ DataTableComponent ],
      providers: [
        ConfigAppFacade
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
