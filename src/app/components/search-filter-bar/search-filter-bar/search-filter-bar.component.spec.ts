import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchFilterBarComponent } from './search-filter-bar.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SearchFilterBarComponent', () => {
  let component: SearchFilterBarComponent;
  let fixture: ComponentFixture<SearchFilterBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterBarComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
