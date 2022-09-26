import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  currentUrl: string;
  collapedSideBar: boolean;
  navbarSee: boolean;
  sidebarSee: boolean;
  containerSee: boolean;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        this.currentUrl = event.urlAfterRedirects;
        this.verify();
      }
    });
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  verify() {
    switch (true) {
      case this.currentUrl === '/login':
      case this.currentUrl === '/password-reset':
        this.collapedSideBar = false;
        this.navbarSee = true;
        this.sidebarSee = false;
        this.containerSee = false;
        break;
      case this.currentUrl.startsWith('/change-password'):
        this.collapedSideBar = false;
        this.navbarSee = true;
        this.sidebarSee = false;
        this.containerSee = false;
        break;
      case this.currentUrl === '/not-found':
        this.navbarSee = false;
        this.sidebarSee = false;
        this.containerSee = false;
        break;
      default:
        this.navbarSee = true;
        this.sidebarSee = true;
        this.containerSee = true;
    }
  }

}
