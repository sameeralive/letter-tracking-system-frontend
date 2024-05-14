import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPermissionsComponent} from "./user-permissions.component";
import {PermissionListComponent} from "./permission-list/permission-list.component";
import {PermissionCreateComponent} from "./permission-create/permission-create.component";
import {NgxPermissionsGuard} from "ngx-permissions";

const routes: Routes = [
  {
    path: '',
    component: UserPermissionsComponent,
    children: [
      {
        path: 'permission-list',
        component: PermissionListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_permission_list'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'permission-create',
        component: PermissionCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_permission_create'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
      {
        path: 'permission-edit/:id',
        component: PermissionCreateComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user_permission_edit'],
            redirectTo: '/pages/dashboard'
          }
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPermissionsRoutingModule { }
