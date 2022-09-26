import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardN1Component } from './metric-card-n1/metric-card-n1.component';
import { MetricCardN2Component } from './metric-card-n2/metric-card-n2.component';
import { MetricCardN3Component } from './metric-card-n3/metric-card-n3.component';



@NgModule({
  declarations: [
    MetricCardN1Component,
    MetricCardN2Component,
    MetricCardN3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MetricCardN1Component,
    MetricCardN2Component,
    MetricCardN3Component
  ]
})
export class MetricCardModule { }
