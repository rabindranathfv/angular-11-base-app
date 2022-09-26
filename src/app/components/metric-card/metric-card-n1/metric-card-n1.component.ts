import { Component, OnInit, Input } from '@angular/core';
import { MetricCardData } from 'src/app/interfaces/metric-cards/metric-card.interface';

@Component({
  selector: 'app-metric-card-n1',
  templateUrl: './metric-card-n1.component.html',
  styleUrls: ['./metric-card-n1.component.scss']
})
export class MetricCardN1Component implements OnInit {

  @Input() metricCardData: MetricCardData;

  constructor() { }

  ngOnInit() {
  }

}
