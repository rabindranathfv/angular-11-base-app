import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.scss']
})
export class OnOffComponent implements OnInit {

  @Input() item: any;
  @Input() index: number;
  @Output() changeStatus = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  change(index) {
    this.changeStatus.emit(index);
  }

}
