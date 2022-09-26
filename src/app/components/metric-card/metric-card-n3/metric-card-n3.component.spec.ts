import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetricCardN3Component } from './metric-card-n3.component';

describe('MetricCardN3Component', () => {
  let component: MetricCardN3Component;
  let fixture: ComponentFixture<MetricCardN3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MetricCardN3Component
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricCardN3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
