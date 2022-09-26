import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './view/layout/main-container/main-container.component';
import { SidebarComponent } from './view/layout/sidebar/sidebar.component';
import { NavbarComponent } from './view/layout/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from './components/toast/toast.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        ToastModule
      ],
      declarations: [
        AppComponent,
        MainContainerComponent,
        SidebarComponent,
        NavbarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular11BaseApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular11BaseApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-main-container')).toBeTruthy();
  });
});
