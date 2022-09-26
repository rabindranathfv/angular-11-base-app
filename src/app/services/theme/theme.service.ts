import { Injectable } from '@angular/core';
import { Theme, light, dark } from 'src/app/theme';
import { Observable } from 'rxjs';
import { ConfigAppFacade } from 'src/app/view/layout/state/configApp.facade';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  activeTheme$: Observable<string>;

  constructor(
    private configAppFacade: ConfigAppFacade
  ) {
    this.activeTheme$ = this.configAppFacade.activeTheme$;
  }

  changeTheme() {
    let theme;
    this.activeTheme$.subscribe(
        value => {
            theme = value;
        }
    );
    if ( theme === 'light') {
      this.setActiveTheme(dark);
      this.configAppFacade.setActiveTheme('dark', 'ag-theme-alpine-dark');
    } else {
      this.setActiveTheme(light);
      this.configAppFacade.setActiveTheme('light', 'ag-theme-alpine');
    }
  }

  setActiveTheme(theme: Theme): void {
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    });
  }
}
