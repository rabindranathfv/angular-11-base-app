import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OwnershipComponent } from './ownership.component';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { OwnershipFacade } from '../store/facade/ownership.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;
const initialState = { ownerships: undefined, errors: undefined };

describe('OwnershipComponent', () => {
  let component: OwnershipComponent;
  let fixture: ComponentFixture<OwnershipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        SearchFilterBarModule,
        ViewHeaderModule,
        InfoCardModule,
        NoDataModule
      ],
      providers : [
        OwnershipFacade,
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
