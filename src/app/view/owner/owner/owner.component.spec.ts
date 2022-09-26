import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OwnerComponent } from './owner.component';
import { SearchFilterBarModule } from 'src/app/components/search-filter-bar/search-filter-bar.module';
import { ViewHeaderModule } from 'src/app/components/view-header/view-header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { NoDataModule } from 'src/app/components/no-data/no-data.module';
import { OwnerFacade } from '../store/facade/owner.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let store: MockStore;
const initialState = { owners: undefined, errors: undefined };

describe('OwnerComponent', () => {
  let component: OwnerComponent;
  let fixture: ComponentFixture<OwnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        SearchFilterBarModule,
        ViewHeaderModule,
        InfoCardModule,
        NoDataModule
      ],
      providers : [
        OwnerFacade,
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
