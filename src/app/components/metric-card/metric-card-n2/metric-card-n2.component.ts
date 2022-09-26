import { Component, OnInit, Input } from '@angular/core';
import { MetricCardData } from 'src/app/interfaces/metric-cards/metric-card.interface';

@Component({
  selector: 'app-metric-card-n2',
  templateUrl: './metric-card-n2.component.html',
  styleUrls: ['./metric-card-n2.component.scss']
})
export class MetricCardN2Component implements OnInit {

  @Input() metricCardData: MetricCardData;

  constructor() { }

  ngOnInit() {
  }

}
