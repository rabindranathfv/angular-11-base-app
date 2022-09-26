import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordResetComponent } from './password-reset.component';
import { AlertComponent } from 'src/app/components/alert/alert/alert.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/app.reducer';

describe('PasswordResetComponent', () => {
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PasswordResetComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        AlertModule,
        StoreModule.forRoot( appReducers ),
      ],
      providers: [
        AuthFacade
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
