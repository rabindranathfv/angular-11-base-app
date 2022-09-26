import { Component, OnInit, Input } from '@angular/core';
import { MetricCardData2 } from 'src/app/interfaces/metric-cards/metric-card.interface';



@Component({
  selector: 'app-metric-card-n3',
  templateUrl: './metric-card-n3.component.html',
  styleUrls: ['./metric-card-n3.component.scss']
})
export class MetricCardN3Component implements OnInit {

  @Input() metricCardData: MetricCardData2;

  constructor() { }

  ngOnInit() {
  }

}
