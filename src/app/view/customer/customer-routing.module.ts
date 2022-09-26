import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'create', component: CreateCustomerComponent },
  { path: 'update/:id', component: CreateCustomerComponent },
  { path: ':id', component: ViewCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
