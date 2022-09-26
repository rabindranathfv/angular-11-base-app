import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MainContainerComponent } from './main-container/main-container.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfigAppFacade } from './state/configApp.facade';
import { ToastModule } from 'src/app/components/toast/toast.module';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgbDropdownModule,
    ToastModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    MainContainerComponent,
  ],
  providers: [
    ConfigAppFacade
  ]
})
export class LayoutComponentsModule { }
