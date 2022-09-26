import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { NoDataModule } from '../../no-data/no-data.module';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports: [
        NoDataModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
