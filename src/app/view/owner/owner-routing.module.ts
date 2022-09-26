import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';

const routes: Routes = [
  { path: '', component: OwnerComponent },
  { path: 'create', component: AddOwnerComponent },
  { path: 'update/:id', component: EditOwnerComponent },
  { path: ':id', component: ViewOwnerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
