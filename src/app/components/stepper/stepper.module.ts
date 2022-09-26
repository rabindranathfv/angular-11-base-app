import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    StepperComponent, StepComponent
  ],
})
export class StepperModule { }
