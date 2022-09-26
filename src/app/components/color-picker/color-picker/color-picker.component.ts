import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() color = 'white';
  @Output() changeColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  upload(event) {
    this.color = event.target.value;
    this.changeColor.emit(this.color);
  }

}
