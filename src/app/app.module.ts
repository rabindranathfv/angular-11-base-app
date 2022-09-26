import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './view/login/login.module';
import { Interceptor } from './interceptor/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MessagesModule } from './components/messages/messages.module';


// guards
import { AuthGuard } from './guard/auth-guard.service';

// services
import { SessionService } from './services/session/session.service';
import { LayoutComponentsModule } from './view/layout/layout.module';
import { PasswordResetModule } from './view/password-reset/password-reset.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';

// ngrx settings
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthEffects } from './store/auth/effects/auth.effects';
import { AuthFacade } from './store/auth/facade/auth.facade';
import { LocalStorageService } from './services/local-storage/localStorage.service';
import { SaveSecureService } from './services/local-storage/saveSecure.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    MessagesModule,
    AppRoutingModule,
    LayoutComponentsModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot([AuthEffects]), // multi reducers configuration
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), // add redux dev tools
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    SessionService,
    LocalStorageService,
    SaveSecureService,
    AuthGuard,
    AuthFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
