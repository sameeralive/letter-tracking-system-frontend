import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterRegistryRoutingModule } from './letter-registry-routing.module';
import { LetterRegistryListComponent } from './letter-registry-list/letter-registry-list.component';
import { LetterRegistryCreateComponent } from './letter-registry-create/letter-registry-create.component';
import {
  NbActionsModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule,
  NbUserModule
} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ThemeModule} from "../../@theme/theme.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {QrCodeModule} from "ng-qrcode";
import {NgxPermissionsModule} from "ngx-permissions";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LetterRegistryListComponent, LetterRegistryCreateComponent],
  imports: [
    CommonModule,
    LetterRegistryRoutingModule,
    NbDatepickerModule,
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
    NbCardModule,
    NbSpinnerModule,
    NgbPaginationModule,
    NbSelectModule,
    QrCodeModule,
    NgxPermissionsModule,
    FormsModule,
  ]
})
export class LetterRegistryModule { }
