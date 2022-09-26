import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TagModule } from '../../tag/tag.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskListDataMock } from 'src/app/_mock-data';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        TagModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.listData = TaskListDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
