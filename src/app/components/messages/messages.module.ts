import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorSignalComponent } from '../error-signal/error-signal.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    ErrorSignalComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports : [
    NotFoundComponent
  ]
})
export class MessagesModule { }
