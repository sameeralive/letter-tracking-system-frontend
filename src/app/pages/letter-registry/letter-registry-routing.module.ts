import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LetterRegistryListComponent} from "./letter-registry-list/letter-registry-list.component";
import {NgxPermissionsGuard} from "ngx-permissions";
import {LetterRegistryCreateComponent} from "./letter-registry-create/letter-registry-create.component";

const routes: Routes = [
  {
    path: 'letter-registry-list',
    component: LetterRegistryListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['user_permission_list'],
        redirectTo: '/pages/dashboard'
      }
    }
  },
  {
    path: 'letter-registry-create',
    component: LetterRegistryCreateComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['user_permission_list'],
        redirectTo: '/pages/dashboard'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterRegistryRoutingModule { }
