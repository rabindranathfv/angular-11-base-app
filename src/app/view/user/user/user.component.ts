import { Component, OnInit } from '@angular/core';
import { UserCardDataMock } from '../../../_mock-data';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';
import { User } from 'src/app/interfaces/user/user';
import { UserFacade } from '../store/facade/user.facade';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: InfoCardData [] = UserCardDataMock;

  infoModule = {
    name: 'userModule.name',
    description: 'userModule.description',
    emptyMessage: 'userModule.emptyMessage',
    icon: 'fa fa-user',
    button: {
      icon: 'fa fa-plus',
      text: 'userModule.name',
      color: 'primary',
      route: 'user/create',
    }
  };

  usersData$: Observable<User[]>;
  permissions$: Observable<any>;

  constructor(
    private userFacade: UserFacade,
    private authFacade: AuthFacade
  ) { }

  ngOnInit() {
    this.userFacade.getUsers();
    this.loadUsers();
    this.permissions$ = this.authFacade.permissions$;
  }

  public loadUsers() {
    this.usersData$ = this.userFacade.loadUsers();
  }

  public deleteUser(id: number ) {
    this.userFacade.deleteUser(id);
  }

}
