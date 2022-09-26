import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [TabsetComponent, TabComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [TabsetComponent, TabComponent],
})
export class TabsetModule { }
