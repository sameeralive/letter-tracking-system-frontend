import {NgModule} from '@angular/core';
import {NbMenuModule, NbDatepickerModule, NbCardModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbInputModule, NbCheckboxModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {NgbModalModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ChartModule} from "angular2-chartjs";
import {FormsModule} from "@angular/forms";
import { NgxPermissionsModule } from 'ngx-permissions';
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NgbModalModule,
    NbDatepickerModule,
    NbCardModule,
    ChartModule,
    NbButtonModule,
    NbSelectModule,
    FormsModule,
    NgbPaginationModule,
    NbSpinnerModule,
    NbInputModule,
    NbCheckboxModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
})
export class PagesModule {
}
