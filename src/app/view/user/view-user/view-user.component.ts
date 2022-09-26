import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';
import { UserFacade } from '../store/facade/user.facade';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  currentUser$: Observable<User>;

  urlDefaultImage = '../../../../assets/img/logo2.png';
  infoModule = {
    name: 'userModule.viewUserComponent.name',
    description: 'userModule.viewUserComponent.description',
    icon: 'fa fa-user'
  };

  constructor(
    private userFacade: UserFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const idUser = this.route.snapshot.params.id;
    this.userFacade.loadUser(idUser);
    this.currentUser$ = this.userFacade.getUser(idUser);
  }

}
