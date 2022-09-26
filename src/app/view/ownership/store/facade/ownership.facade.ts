import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromOwnershipActions from '../action/ownership.actions';
import { OwnershipAppState } from '../reducer/ownership.reducer';
import { OwnershipSelectors } from '../selector/ownership.selectors';


import { Observable } from 'rxjs';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';

@Injectable()
export class OwnershipFacade {

    ownershipsData$: any = this.store.select(OwnershipSelectors.selectOwnerships);
    error$: any = this.store.select(OwnershipSelectors.getError);

    constructor( private store: Store<OwnershipAppState> ) {}

    getOwnerships() {
        this.store.dispatch( fromOwnershipActions.loadOwnerships());
    }

    loadOwnerships(): Observable<Ownership[]> {
        return this.store.pipe(select(OwnershipSelectors.selectOwnerships));
    }

    getOwnership(id: number ) {
        return this.store.pipe(select(OwnershipSelectors.selectOwnership, {id}));
    }

    loadOwnership(id: number) {
        this.store.dispatch(fromOwnershipActions.loadOwnership({id}));
    }

    createOwnership(ownership: Ownership) {
        this.store.dispatch(fromOwnershipActions.createOwnership({ownership}));
    }

    updateOwnership(ownership: Ownership) {
        this.store.dispatch(fromOwnershipActions.updateOwnership({ownership}));
    }

    deleteOwnership(id: number ) {
        this.store.dispatch( fromOwnershipActions.deleteOwnership({id}));
    }

}
