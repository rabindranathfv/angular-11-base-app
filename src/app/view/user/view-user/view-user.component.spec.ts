import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { UsersService } from 'src/app/services/users/users.service';
import { UserFacade } from '../../user/store/facade/user.facade';

import { ViewUserComponent } from './view-user.component';
let store: MockStore;
const initialState = { users: undefined, error: undefined };

describe('ViewUserComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserComponent ],
      imports: [
        TranslateModule.forRoot(),
        TabsetModule,
        ViewHeaderModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers: [
        UsersService,
        UserFacade,
        provideMockStore({ initialState }),
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
