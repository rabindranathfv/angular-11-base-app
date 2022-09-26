import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { StepComponent } from './../step/step.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  constructor() {}

  ngAfterContentInit() {
    const activeSteps = this.steps.filter((step) => step.active);
    if (activeSteps.length === 0) {
      this.selectStep(this.steps.first);
    } else {
      this.selectStep(activeSteps[0]);
    }

    this.subscribeButtons();
  }

  subscribeButtons() {
    this.steps.toArray().forEach((step, index) => {
      step.next.subscribe((e) => this.next());
      step.previous.subscribe((e) => this.previous());
      step.stepIndex = index + 1;
    });
  }

  // Next button functions:

  next() {
    this.onNextClick(this.steps.toArray().findIndex((step) => step.active));
  }

  onNextClick(index) {
    // Activate next tab
    this.steps.toArray()[index + 1].active = true;

    // Deactivate current tab before pressing button
    this.steps.toArray()[index].active = false;
  }

  // Previous button functions:

  previous() {
    this.onPreviousClick(this.steps.toArray().findIndex((step) => step.active));
  }

  onPreviousClick(index) {
    // Activate previous tab
    this.steps.toArray()[index - 1].active = true;

    // Deactivate current tab before pressing button
    this.steps.toArray()[index].active = false;
  }

  selectStep(step: StepComponent) {
    // deactivate all stepss
    this.steps.toArray().forEach((el) => (el.active = false));
    // activate the tab the user has clicked on.
    if (step) {
      step.active = true;
    }
  }
}
