import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPermissionsRoutingModule } from './user-permissions-routing.module';
import { UserPermissionsComponent } from './user-permissions.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionCreateComponent } from './permission-create/permission-create.component';
import {
    NbActionsModule,
    NbButtonModule, NbCardModule,
    NbCheckboxModule, NbDatepickerModule, NbIconModule,
    NbInputModule, NbRadioModule,
    NbSelectModule, NbSpinnerModule,
    NbUserModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [UserPermissionsComponent, PermissionListComponent, PermissionCreateComponent],
    imports: [
        CommonModule,
        UserPermissionsRoutingModule,
        NbSelectModule,
        Ng2SmartTableModule,
        ThemeModule,
        NbInputModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        NbIconModule,
        ngFormsModule,
        NbCardModule,
        NbSpinnerModule,
        NgbPaginationModule,
    ]
})
export class UserPermissionsModule { }
