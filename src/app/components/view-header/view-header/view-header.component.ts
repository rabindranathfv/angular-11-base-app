import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Button } from 'src/app/interfaces/button/button.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss']
})
export class ViewHeaderComponent implements OnInit {

  @Input() viewName: string;
  @Input() icon = 'fa fa-check';
  @Input() viewDescription: string;
  @Input() button: Button;

  constructor(
    private translate: TranslateService,
    private router: Router) {
    translate.setDefaultLang('en');
  }
  ngOnInit() {
  }

  action(route: string) {
    if (route && route !== '') {
      this.router.navigate([route]);
    }
  }

}
