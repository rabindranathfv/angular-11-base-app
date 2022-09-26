import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss']
})
export class StatusCellComponent {


  value: any;
  statusColor = 'dark';
  constructor() { }

  agInit(params: any) {
    this.value = params.value;
    this.setStatusColor();

  }

  refresh(params: any): boolean {
    return true;
  }

  setStatusColor() {
    switch (this.value) {
      case 'active' :
        this.statusColor = 'success';
        break;
      case 'suspended' :
        this.statusColor = 'warning';
        break;
      case 'inactive' :
        this.statusColor = 'danger';
    }
  }

}
