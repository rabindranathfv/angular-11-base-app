import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from 'src/app/interfaces/task-list/task-list.interface';
import { TaskListDataMock } from 'src/app/_mock-data';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() listData: TaskList;

  constructor() { }

  ngOnInit() {

  }

}
