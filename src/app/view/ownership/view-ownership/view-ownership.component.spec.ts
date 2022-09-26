import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewOwnershipComponent } from './view-ownership.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabsetModule } from '../../../components/tabset/tabset.module';
import { ViewHeaderModule } from '../../../components/view-header/view-header.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { OwnershipFacade } from '../store/facade/ownership.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;
const initialState = { ownerships: undefined, errors: undefined };

describe('ViewOwnershipComponent', () => {
  let component: ViewOwnershipComponent;
  let fixture: ComponentFixture<ViewOwnershipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOwnershipComponent ],
      imports: [
        TranslateModule.forRoot(),
        TabsetModule,
        ViewHeaderModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers : [
        OwnershipFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
