import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { IconCellComponent } from './custom-cells/icon-cell/icon-cell.component';
import { StatusCellComponent } from './custom-cells/status-cell/status-cell.component';
import { UserImageCellComponent } from './custom-cells/user-image-cell/user-image-cell.component';

const customCells = [
  IconCellComponent,
  StatusCellComponent,
  UserImageCellComponent
];


@NgModule({
  declarations: [
    DataTableComponent,
    [...customCells]
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      [...customCells]
    ])
  ],
  exports: [
    DataTableComponent,
    [...customCells]
  ]
})
export class DataTableModule { }
