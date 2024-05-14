import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {
    NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule,
    NbRadioModule, NbSelectModule, NbSpinnerModule, NbUserModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserCreateComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
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
    ],
})
export class UsersModule { }
