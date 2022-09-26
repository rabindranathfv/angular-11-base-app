import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AlertComponent } from 'src/app/components/alert/alert/alert.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfigAppFacade } from './../../../view/layout/state/configApp.facade';
import { appReducers } from 'src/app/app.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { AlertModule } from 'src/app/components/alert/alert.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot( appReducers ),
        ReactiveFormsModule,
        RouterTestingModule,
        AlertModule
      ],
      providers: [
        ConfigAppFacade,
        AuthFacade
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
