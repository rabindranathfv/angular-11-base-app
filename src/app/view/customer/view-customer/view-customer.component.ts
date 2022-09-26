import { Component, OnInit } from '@angular/core';
import { AuthFacade } from 'src/app/store/auth/facade/auth.facade';
import { Customer } from 'src/app/interfaces/customers/customers.interface';
import { Observable } from 'rxjs';
import { CustomerFacade } from '../store/facade/customer.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  currentCustomer$: Observable<Customer>;

  urlDefaultImage = '../../../../assets/img/logo2.png';
  defaultColor = 'teal';

  infoModule = {
    name: 'customerModule.viewCustomerComponent.name',
    description: 'customerModule.viewCustomerComponent.description',
    icon: 'fa fa-user'
  };

  constructor(
    private customerFacade: CustomerFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const idCustomer = this.route.snapshot.params.id;
    this.customerFacade.loadCustomer(idCustomer);
    this.currentCustomer$ = this.customerFacade.getCustomer(idCustomer);
  }

}
