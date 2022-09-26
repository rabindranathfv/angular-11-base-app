import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetricCardN1Component } from './metric-card-n1.component';

describe('MetricCardN1Component', () => {
  let component: MetricCardN1Component;
  let fixture: ComponentFixture<MetricCardN1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MetricCardN1Component,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricCardN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
