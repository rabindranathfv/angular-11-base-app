import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TagModule } from '../tag/tag.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';



@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TagModule,
    TranslateModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
