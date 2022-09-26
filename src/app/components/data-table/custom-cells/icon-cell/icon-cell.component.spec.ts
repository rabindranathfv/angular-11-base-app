import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconCellComponent } from './icon-cell.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('IconCellComponent', () => {
  let component: IconCellComponent;
  let fixture: ComponentFixture<IconCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCellComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
