import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    ViewHeaderComponent
  ]
})
export class ViewHeaderModule { }
