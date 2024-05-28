import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPermissionsGuard} from "ngx-permissions";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectCreateComponent} from "./project-create/project-create.component";

const routes: Routes = [
  {
    path: 'project-list',
    component: ProjectListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['project_list'],
        redirectTo: '/pages/dashboard'
      }
    }
  },
  {
    path: 'project-create',
    component: ProjectCreateComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['project_create'],
        redirectTo: '/pages/dashboard'
      }
    }
  },
  {
    path: 'project-edit/:id',
    component: ProjectCreateComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['project_edit'],
        redirectTo: '/pages/dashboard'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
