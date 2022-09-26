import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Input() alertType: string;
  @Input() isVisible: boolean;
  @Output() hide = new EventEmitter<boolean>();

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

  closeAlert() {
    this.hide.emit(false);
  }

}
