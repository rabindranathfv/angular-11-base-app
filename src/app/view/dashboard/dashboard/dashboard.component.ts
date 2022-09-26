import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TagDataMock, TaskListDataMock, ColumnDefs, RowData, ChartData, DashboardN1CardData, DashboardChart } from '../../../_mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    firstLogin: boolean;
    columnDefs = ColumnDefs;
    rowData = RowData;
    chartData = ChartData;
    dashboardChart = DashboardChart;
    metrics = DashboardN1CardData;

    infoModule = {
      name: 'dashboardModule.name',
      description: 'dashboardModule.description',
      icon: 'fa fa-dashboard'
    };

    constructor() {

    }

    ngOnInit() {
      this.firstLogin = true;
    }

}
