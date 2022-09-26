import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { sidenavItems } from '../../../_sidenavItems';

export interface SubMenuItem {
    name: string;
    active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isActive: boolean;
  collapsed: boolean;
  subMenuItems: Array<SubMenuItem>;
  pushRightClass: string;
  SidenavItems: any;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {
      translate.setDefaultLang('en');
      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }


  ngOnInit() {
      this.SidenavItems = sidenavItems;
      this.isActive = false;
      this.collapsed = false;
      this.subMenuItems = [
        {name: 'submenu1', active: false},
        {name: 'submenu2', active: false}
      ];
      this.pushRightClass = 'push-right';
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }

  isActiveRoute( url) {
    return url === this.router.url;
  }

  addExpandClass(menuName: any) {
    this.collapsed = !this.collapsed ? false : false;
    const element = this.subMenuItems.find(e => e.name === menuName);
    element.active = element.active ? false : true;
  }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.subMenuItems.forEach(item => item.active = false);
      this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  changeLang(language: string) {
      this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }
}

