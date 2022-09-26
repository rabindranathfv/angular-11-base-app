import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TaskListModule } from 'src/app/components/task-list/task-list.module';
import { TagModule } from 'src/app/components/tag/tag.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { ChartModule } from 'src/app/components/chart/chart.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { MetricCardModule } from 'src/app/components/metric-card/metric-card.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    DashboardRoutingModule,
    HttpClientModule,
    TaskListModule,
    TranslateModule,
    TagModule,
    DataTableModule,
    ChartModule,
    NoDataModule,
    ViewHeaderModule,
    MetricCardModule
  ],
  exports : [

  ]
})
export class DashboardModule { }
