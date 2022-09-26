import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path: '', component: UserComponent},
  { path: 'create', component: CreateUserComponent },
  { path: 'update/:id', component: CreateUserComponent },
  { path: ':id', component: ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
