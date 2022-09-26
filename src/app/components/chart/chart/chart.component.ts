import { Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('chart') barChart: ElementRef;
  @Input() chartData: any;
  context: any;
  chart: Chart;
  validData = true;

  constructor() { }


  ngAfterViewInit() {
    if (this.chartData && this.chartData.data && this.chartData.data.datasets.length) {
      this.context = this.barChart.nativeElement.getContext('2d');
      this.chart = new Chart(this.context, this.chartData );
    } else {
      setTimeout(() => { // prevent ExpressionChangedAfterItHasBeenCheckedError
        this.validData = false;
      }, 500);
    }

  }

}
