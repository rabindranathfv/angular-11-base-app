import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsDemoRoutingModule } from './components-demo-routing.module';
import { DemoComponent } from './demo/demo.component';
import { TagModule } from 'src/app/components/tag/tag.module';
import { ChartModule } from 'src/app/components/chart/chart.module';
import { TaskListModule } from 'src/app/components/task-list/task-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    ComponentsDemoRoutingModule,
    TagModule,
    ChartModule,
    TaskListModule,
    TranslateModule,
    MetricCardModule,
    NoDataModule,
    DataTableModule,
    SpinnerModule,
    ModalModule.forRoot()

  ]
})
export class ComponentsDemoModule { }
