import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromOwnerActions from '../action/owner.actions';
import { OwnerAppState } from '../reducer/owner.reducer';
import { OwnerSelectors } from '../selector/owner.selectors';


import { Observable } from 'rxjs';
import { Owner } from 'src/app/interfaces/owner/owner.interface';

@Injectable()
export class OwnerFacade {

    ownersData$: any = this.store.select(OwnerSelectors.selectOwners);
    error$: any = this.store.select(OwnerSelectors.getError);

    constructor( private store: Store<OwnerAppState> ) {}

    getOwners() {
        this.store.dispatch( fromOwnerActions.loadOwners());
    }

    loadOwners(): Observable<Owner[]> {
        return this.store.pipe(select(OwnerSelectors.selectOwners));
    }

    getOwner(id: number ) {
        return this.store.pipe(select(OwnerSelectors.selectOwner, {id}));
    }

    loadOwner(id: number) {
        this.store.dispatch(fromOwnerActions.loadOwner({id}));
    }

    createOwner(owner: Owner) {
        this.store.dispatch(fromOwnerActions.createOwner({owner}));
    }

    updateOwner(owner: Owner) {
        this.store.dispatch(fromOwnerActions.updateOwner({owner}));
    }

    deleteOwner(id: number ) {
        this.store.dispatch( fromOwnerActions.deleteOwner({id}));
    }

}
