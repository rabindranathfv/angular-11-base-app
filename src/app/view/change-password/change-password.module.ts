import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChangePasswordRoutingModule } from './change-password-routing.module';



@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    TranslateModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangePasswordModule { }
