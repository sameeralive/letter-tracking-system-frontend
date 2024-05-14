import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolesRoutingModule } from './user-roles-routing.module';
import { UserRolesComponent } from './user-roles.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule,
    NbInputModule, NbRadioModule,
    NbSelectModule, NbSpinnerModule,
    NbUserModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [UserRolesComponent, RoleListComponent, RoleCreateComponent],
    imports: [
        CommonModule,
        UserRolesRoutingModule,
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
export class UserRolesModule { }
