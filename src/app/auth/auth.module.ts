import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import {FormsModule} from '@angular/forms';
import {SnotifyModule} from 'ng-snotify';
import {NbCardModule, NbSpinnerModule} from '@nebular/theme';
import {LoginComponent} from './login/login.component';
import {ThemeModule} from '../@theme/theme.module';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RequestResetComponent, ResponseResetComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        SnotifyModule,
        NbCardModule,
        ThemeModule,
        NbSpinnerModule,
    ],
})
export class AuthModule { }
