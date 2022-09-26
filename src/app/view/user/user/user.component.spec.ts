import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { UsersService } from 'src/app/services/users/users.service';
import { UserFacade } from '../store/facade/user.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
const initialState = { users: undefined, error: undefined };

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        SearchFilterBarModule,
        ViewHeaderModule,
        InfoCardModule,
        NoDataModule
      ],
      providers: [
        UsersService,
        UserFacade,
        AuthFacade,
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
