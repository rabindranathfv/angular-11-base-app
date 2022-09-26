import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserImageCellComponent } from './user-image-cell.component';

describe('UserImageCellComponent', () => {
  let component: UserImageCellComponent;
  let fixture: ComponentFixture<UserImageCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImageCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
