import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from '../pages/miscellaneous/not-found/not-found.component';
import {RequestResetComponent} from './request-reset/request-reset.component';
import {ResponseResetComponent} from './response-reset/response-reset.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'request-password-reset',
        component: RequestResetComponent,
      },
      {
        path: 'response-password-reset',
        component: ResponseResetComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
