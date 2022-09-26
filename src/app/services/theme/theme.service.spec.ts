import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { ConfigAppFacade } from 'src/app/view/layout/state/configApp.facade';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/app.reducer';

describe('ThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot( appReducers ),
    ],
    providers: [
      ConfigAppFacade
    ]
  }));

  it('should be created', () => {
    const service: ThemeService = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });
});
