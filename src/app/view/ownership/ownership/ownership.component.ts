import { Component, OnInit } from '@angular/core';
import { OwnershipCardDataMock } from '../../../_mock-data';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';
import { OwnershipFacade } from '../store/facade/ownership.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent implements OnInit {

  infoModule = {
    name: 'ownershipModule.name',
    description: 'ownershipModule.description',
    emptyMessage: 'ownershipModule.emptyMessage',
    icon: 'fa fa-user',
    button: {
      icon: 'fa fa-plus',
      text: 'ownershipModule.name',
      color: 'primary',
      route: 'ownership/create',
    }
  };


  ownershipsData$: Observable<Ownership[]>;

  constructor(
    private ownershipFacade: OwnershipFacade
  ) { }

  ngOnInit() {
    this.ownershipFacade.getOwnerships();
    this.loadOwnerships();
  }

  public loadOwnerships() {
    this.ownershipsData$ = this.ownershipFacade.loadOwnerships();
  }

}
