import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  modules = [
    {name: 'Dashboard', icon: 'fa fa-dashboard', active: true },
    {name: 'Config', icon: 'fa fa-cog', active: true },
    {name: 'Users', icon: 'fa fa-user', active: false },
    {name: 'Customers', icon: 'fa fa-user', active: false },
    {name: 'Owners', icon: 'fa fa-user', active: false },
  ];

  primaryColor = '#292961';
  secondaryColor = '#e91e63';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeStatus(index) {
    this.modules[index].active = !this.modules[index].active;
  }

}
