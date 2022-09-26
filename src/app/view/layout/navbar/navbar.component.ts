import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public pushRightClass: string;
    public language = 'en';

    constructor(
        private translate: TranslateService,
        public router: Router,
        private themeService: ThemeService,
        private authFacade: AuthFacade
    ) {
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
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    logout() {
        this.authFacade.logout();
        this.router.navigate(['login']);
    }

    changeTheme() {
        this.themeService.changeTheme();
    }

    changeLang() {
        switch (this.language) {
            case 'es': this.language = 'en';
                       break;
            case 'en': this.language = 'es';
        }
        this.translate.use(this.language);
    }

}
