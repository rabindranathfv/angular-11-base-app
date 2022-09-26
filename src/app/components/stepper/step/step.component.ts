import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() stepTitle: string;
  @Input() active = false;


  @Output() next = new EventEmitter<boolean>();
  @Output() previous = new EventEmitter<boolean>();

  stepIndex: number;

  constructor() {
  }

  ngOnInit() {
  }

  nextStep() {
    this.next.emit(true);
  }

  previousStep() {
    this.previous.emit(true);
  }

}
