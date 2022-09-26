import { Component, OnInit } from '@angular/core';
import { Ownership } from 'src/app/interfaces/ownership/ownership.interface';
import { ActivatedRoute } from '@angular/router';
import { OwnershipFacade } from '../store/facade/ownership.facade';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-ownership',
  templateUrl: './view-ownership.component.html',
  styleUrls: ['./view-ownership.component.scss']
})
export class ViewOwnershipComponent implements OnInit {


  currentOwnership$: Observable<Ownership>;

  infoModule = {
    name: 'ownershipModule.viewOwnershipComponent.name',
    description: 'ownershipModule.viewOwnershipComponent.description',
    icon: 'fa fa-user'
  };

  constructor(
    private route: ActivatedRoute,
    private ownershipFacade: OwnershipFacade
  ) {

  }

  ngOnInit() {
    const idOwnership = this.route.snapshot.params.id;
    this.ownershipFacade.loadOwnership(idOwnership);
    this.currentOwnership$ = this.ownershipFacade.getOwnership(idOwnership);
  }

}
