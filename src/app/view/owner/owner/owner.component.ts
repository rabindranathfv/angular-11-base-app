import { Component, OnInit } from '@angular/core';
import { OwnerCardDataMock } from '../../../_mock-data';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';
import { Owner } from 'src/app/interfaces/owner/owner.interface';
import { OwnerFacade } from '../store/facade/owner.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  infoModule = {
    name: 'ownerModule.name',
    description: 'ownerModule.description',
    emptyMessage: 'ownerModule.emptyMessage',
    icon: 'fa fa-user',
    button: {
      icon: 'fa fa-plus',
      text: 'ownerModule.name',
      color: 'primary',
      route: 'owner/create',
    }
  };


  ownersData$: Observable<Owner[]>;

  constructor(
    private ownerFacade: OwnerFacade
  ) { }

  ngOnInit() {
    this.ownerFacade.getOwners();
    this.loadOwners();
  }

  public loadOwners() {
    this.ownersData$ = this.ownerFacade.loadOwners();
  }

}
