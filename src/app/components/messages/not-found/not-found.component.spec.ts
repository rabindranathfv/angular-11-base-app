import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { ErrorSignalComponent } from '../../error-signal/error-signal.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
        ErrorSignalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
