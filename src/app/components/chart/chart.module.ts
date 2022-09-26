import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { NoDataModule } from '../no-data/no-data.module';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    NoDataModule
  ],
   exports : [
    ChartComponent
   ]
})
export class ChartModule { }
