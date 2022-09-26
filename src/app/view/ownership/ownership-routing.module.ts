import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnershipComponent } from './ownership/ownership.component';
import { ViewOwnershipComponent } from './view-ownership/view-ownership.component';
import { AddOwnershipComponent } from './add-ownership/add-ownership.component';
import { EditOwnershipComponent } from './edit-ownership/edit-ownership.component';

const routes: Routes = [
  { path: '', component: OwnershipComponent },
  { path: 'create', component: AddOwnershipComponent },
  { path: 'update/:id', component: EditOwnershipComponent },
  { path: ':id', component: ViewOwnershipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnershipRoutingModule {}
