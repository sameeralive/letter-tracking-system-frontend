import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRolesComponent} from './user-roles.component';
import {RoleListComponent} from './role-list/role-list.component';
import {RoleCreateComponent} from './role-create/role-create.component';
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path: '',
    component: UserRolesComponent,
    children: [
      {
        path: 'role-list',
        component: RoleListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_role_list'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'role-create',
        component: RoleCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_role_create'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'role-edit/:id',
        component: RoleCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_role_edit'],
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
export class UserRolesRoutingModule { }
