import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorSignalComponent } from './error-signal.component';

describe('ErrorSignalComponent', () => {
  let component: ErrorSignalComponent;
  let fixture: ComponentFixture<ErrorSignalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
