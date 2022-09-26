import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-image-cell',
  templateUrl: './user-image-cell.component.html',
  styleUrls: ['./user-image-cell.component.scss']
})
export class UserImageCellComponent {

  constructor() { }

  value: any = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png';

  agInit(params: any) {
    this.value = params.value;
  }

  refresh(params: any): boolean {
    return true;
  }

}
