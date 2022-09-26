import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PasswordResetRoutingModule } from './password-reset-routing.module';


@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    PasswordResetRoutingModule,
    TranslateModule
  ],
  exports: [PasswordResetComponent],
})
export class PasswordResetModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
