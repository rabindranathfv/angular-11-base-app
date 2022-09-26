import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag/tag.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tagData: Tag;
  active = true;


  constructor() { }

  ngOnInit() {
  }

  dismiss() {
    this.active = false;
  }

}
