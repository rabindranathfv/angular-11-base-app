import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabsetModule } from 'src/app/components/tabset/tabset.module';
import { ProfileHeaderModule } from 'src/app/components/profile-header/profile-header.module';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        TranslateModule.forRoot(),
        TabsetModule,
        ProfileHeaderModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
