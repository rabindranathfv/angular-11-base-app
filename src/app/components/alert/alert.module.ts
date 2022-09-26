import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule {

}
