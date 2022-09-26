import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProfileHeaderComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [ProfileHeaderComponent],
})
export class ProfileHeaderModule { }
