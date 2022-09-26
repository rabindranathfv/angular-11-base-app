import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-filter-bar',
  templateUrl: './search-filter-bar.component.html',
  styleUrls: ['./search-filter-bar.component.scss']
})
export class SearchFilterBarComponent implements OnInit {

  @Input() filters = 'searchFilterBarModule.filters';
  @Input() search = 'searchFilterBarModule.search';

  constructor() { }

  ngOnInit() {
  }

}
