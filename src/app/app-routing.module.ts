import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './basic/add-user/add-user.component';
import { ListUsersComponent } from './basic/list-users/list-users.component';

const routes: Routes = [
  {
    path:"add", component:AddUserComponent
  },
  {
    path:"list", component:ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
