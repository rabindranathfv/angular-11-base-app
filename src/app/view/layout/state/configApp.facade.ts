import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as configAppActions from './configApp.actions';
import { ConfigAppState } from './configApp.reducer';
import { configAppSelectors } from './configApp.selector';

@Injectable()
export class ConfigAppFacade {

    loadingConfig$ = this.store.select(configAppSelectors.getLoading);
    activeTheme$ = this.store.select(configAppSelectors.getActiveTheme);
    tableTheme$ = this.store.select(configAppSelectors.getTableTheme);
    constructor( private store: Store<ConfigAppState> ) {}

    showLoading() {
        this.store.dispatch( configAppActions.showLoading() );
    }

    hideLoading() {
        this.store.dispatch( configAppActions.hideLoading() );
    }

    setActiveTheme(activeTheme: string, tableTheme: string) {
        this.store.dispatch( configAppActions.loadTheme( {activeTheme, tableTheme}) );
    }

}
