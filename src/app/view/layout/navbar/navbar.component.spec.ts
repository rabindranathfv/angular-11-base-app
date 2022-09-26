import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigAppFacade } from '../state/configApp.facade';
import { appReducers } from 'src/app/app.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot( appReducers ),
        RouterTestingModule
      ],
      providers: [
        ConfigAppFacade,
        AuthFacade
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
