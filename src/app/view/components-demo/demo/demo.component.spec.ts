import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';
import { TagModule } from 'src/app/components/tag/tag.module';
import { ChartModule } from 'src/app/components/chart/chart.module';
import { TaskListModule } from 'src/app/components/task-list/task-list.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ModalModule } from 'ngx-bootstrap/modal/';
import { ConfigAppFacade } from '../../layout/state/configApp.facade';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/app.reducer';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        MetricCardModule,
        TagModule,
        ChartModule,
        TaskListModule,
        DataTableModule,
        NoDataModule,
        SpinnerModule,
        ModalModule.forRoot(),
        StoreModule.forRoot( appReducers ),
      ],
      providers: [
        ConfigAppFacade
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
