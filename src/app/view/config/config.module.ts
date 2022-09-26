import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config/config.component';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { OnOffModule } from 'src/app/components/on-off/on-off.module';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'src/app/components/color-picker/color-picker.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    ViewHeaderModule,
    OnOffModule,
    NgbDropdownModule,
    ColorPickerModule,
    TranslateModule
  ]
})
export class ConfigModule { }
