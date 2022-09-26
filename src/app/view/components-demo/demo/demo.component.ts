import { Component, OnInit, TemplateRef } from '@angular/core';
import { DashboardChart, TagDataMock, DashboardN1CardData, TaskListDataMock } from '../../../_mock-data';
import { ColumnDefs, RowData, N1CardData, ChartData} from '../../../_mock-data';
import { N2CardData, N3CardData, CustomerCardDataMock } from '../../../_mock-data';
import { MetricCardData, MetricCardData2 } from 'src/app/interfaces/metric-cards/metric-card.interface';
import { BsModalService } from 'ngx-bootstrap/modal/';
import { BsModalRef } from 'ngx-bootstrap/modal/';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';
import { TaskList } from 'src/app/interfaces/task-list/task-list.interface';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  dashboardChart = DashboardChart;
  tagData = TagDataMock;
  metrics = DashboardN1CardData;
  taskListData: TaskList = TaskListDataMock;
  chartData = ChartData;
  columnDefs = ColumnDefs;
  rowData = RowData;
  n1CardData: MetricCardData [] = N1CardData;
  n2CardData: MetricCardData [] = N2CardData;
  n3CardData: MetricCardData2 [] = N3CardData;
  customers: InfoCardData [] = CustomerCardDataMock;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public toastService: ToastService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'modal-lg'})
      );
  }

  ngOnInit() {
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { delay: 3000 });
  }

}
