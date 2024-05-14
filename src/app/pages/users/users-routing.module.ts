import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['users_list'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'user-create',
        component: UserCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_create'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'user-edit/:id',
        component: UserCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_edit'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
