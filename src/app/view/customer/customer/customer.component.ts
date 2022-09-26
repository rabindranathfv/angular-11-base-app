import { CustomerFacade } from './../store/facade/customer.facade';
import { Component, OnInit } from '@angular/core';
import { MetricCardData2, MetricCardData } from 'src/app/interfaces/metric-cards/metric-card.interface';
import { N1CardData, N2CardData, N3CardData, CustomerCardDataMock } from '../../../_mock-data';
import { InfoCardData } from 'src/app/interfaces/info-card/info-card.interface';

import { Customer } from './../../../interfaces/customers/customers.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  n1CardData: MetricCardData [] = N1CardData;
  n2CardData: MetricCardData [] = N2CardData;
  n3CardData: MetricCardData2 [] = N3CardData;
  customers: InfoCardData [] = CustomerCardDataMock;
  infoModule = {
    name: 'customerModule.name',
    description: 'customerModule.description',
    emptyMessage: 'customerModule.emptyMessage',
    icon: 'fa fa-user',
    button: {
      icon: 'fa fa-plus',
      text: 'customerModule.name',
      color: 'primary',
      route: 'customer/create',
    }
  };

  customersData$: Observable<Customer[]>;

  constructor(
              private customerFacade: CustomerFacade
  ) { }

  ngOnInit() {
    this.customerFacade.getCustomers();
    this.loadCustomers();
  }

  /**
   * getCustomers
   */
  public loadCustomers() {
    this.customersData$ = this.customerFacade.loadCustomers();
  }

  public deleteCustomer(id: number ) {
    this.customerFacade.deleteCustomer(id);
  }
}


