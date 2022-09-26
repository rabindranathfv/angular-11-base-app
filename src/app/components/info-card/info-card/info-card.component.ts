import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() data: InfoCardData;
  @Input() type = 'default';
  @Output() delete = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit() {}

  toAction(route: string, id: number) {
    if (route === 'delete') {
      this.delete.emit(id);
    } else {
      this.router.navigate([route, id]);
    }
  }
}
