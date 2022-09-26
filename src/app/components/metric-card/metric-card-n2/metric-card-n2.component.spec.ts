import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetricCardN2Component } from './metric-card-n2.component';

describe('MetricCardN2Component', () => {
  let component: MetricCardN2Component;
  let fixture: ComponentFixture<MetricCardN2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MetricCardN2Component
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricCardN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
