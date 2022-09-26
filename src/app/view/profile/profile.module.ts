import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileHeaderModule } from 'src/app/components/profile-header/profile-header.module';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    ProfileHeaderModule,
    TabsetModule
  ]
})
export class ProfileModule { }
