import { Component, OnInit } from '@angular/core';
import { OwnerDataMock } from 'src/app/_mock-data';
import { Owner } from 'src/app/interfaces/owner/owner.interface';
import { ActivatedRoute } from '@angular/router';
import { OwnerFacade } from '../store/facade/owner.facade';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.component.html',
  styleUrls: ['./view-owner.component.scss']
})
export class ViewOwnerComponent implements OnInit {


  currentOwner$: Observable<Owner>;

  infoModule = {
    name: 'ownerModule.viewOwnerComponent.name',
    description: 'ownerModule.viewOwnerComponent.description',
    icon: 'fa fa-user'
  };

  constructor(
    private route: ActivatedRoute,
    private ownerFacade: OwnerFacade
  ) {

  }

  ngOnInit() {
    const idUser = this.route.snapshot.params.id;
    this.ownerFacade.loadOwner(idUser);
    this.currentOwner$ = this.ownerFacade.getOwner(idUser);
  }

}
