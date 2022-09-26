import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterBarComponent } from './search-filter-bar/search-filter-bar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SearchFilterBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SearchFilterBarComponent
  ],
})
export class SearchFilterBarModule { }
