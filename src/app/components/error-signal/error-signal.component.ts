import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-signal',
  templateUrl: './error-signal.component.html',
  styleUrls: ['./error-signal.component.scss']
})
export class ErrorSignalComponent implements OnInit {

  @Input() message: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    const card = document.querySelector('#signal');
    card.classList.add(this.color);
  }

}
