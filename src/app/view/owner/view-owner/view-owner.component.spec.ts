import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewOwnerComponent } from './view-owner.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabsetModule } from '../../../components/tabset/tabset.module';
import { ViewHeaderModule } from '../../../components/view-header/view-header.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { OwnerFacade } from '../store/facade/owner.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;
const initialState = { owners: undefined, errors: undefined };

describe('ViewOwnerComponent', () => {
  let component: ViewOwnerComponent;
  let fixture: ComponentFixture<ViewOwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOwnerComponent ],
      imports: [
        TranslateModule.forRoot(),
        TabsetModule,
        ViewHeaderModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers : [
        OwnerFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
