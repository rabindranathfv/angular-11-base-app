import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnOffComponent } from './on-off.component';

describe('OnOffComponent', () => {
  let component: OnOffComponent;
  let fixture: ComponentFixture<OnOffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
