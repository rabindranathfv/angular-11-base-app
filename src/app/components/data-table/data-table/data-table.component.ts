import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { IconCellComponent } from '../custom-cells/icon-cell/icon-cell.component';
import { StatusCellComponent } from '../custom-cells/status-cell/status-cell.component';
import { UserImageCellComponent } from '../custom-cells/user-image-cell/user-image-cell.component';


import { ConfigAppFacade } from '../../../view/layout/state/configApp.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() columnDefs: any;
  @Input() rowData: any;
  themeTable$: Observable<string>;
  paginationPageSize = 10;
  frameworkComponents = {
    iconCell: IconCellComponent,
    statusCell: StatusCellComponent,
    userImageCell: UserImageCellComponent
  };



  constructor(
    public themeService: ThemeService,
    private configAppFacade: ConfigAppFacade
  ) {

    }

  ngOnInit() {
    this.getCurrentTheme();
  }

  getCurrentTheme() {
    this.themeTable$ = this.configAppFacade.tableTheme$;
  }

}
