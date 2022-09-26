import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { ColorPickerModule } from 'src/app/components/color-picker/color-picker.module';
import { OnOffModule } from 'src/app/components/on-off/on-off.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigComponent ],
      imports : [
        ViewHeaderModule,
        TranslateModule.forRoot(),
        ColorPickerModule,
        OnOffModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
      ],
      providers : [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
