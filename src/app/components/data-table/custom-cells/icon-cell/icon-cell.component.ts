import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-cell',
  templateUrl: './icon-cell.component.html',
  styleUrls: ['./icon-cell.component.scss']
})
export class IconCellComponent {

  value: any;
  color: any;
  icon: any;

  constructor( public router: Router) { }

  agInit(params: any) {
    this.icon = params.icon.name;
    this.value = params.value;
    this.color = params.icon.color ? params.icon.color : 'black';
  }

  refresh(params: any): boolean {
    return true;
  }

  iconAction() {
    this.router.navigate([this.value]);
  }

}
