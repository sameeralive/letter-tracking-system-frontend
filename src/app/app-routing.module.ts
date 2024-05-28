import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';

export const routes: Routes = [

  {path: '', redirectTo: '/admin/login', pathMatch: 'full'},

  {
    path: 'admin',
    canActivate: [BeforeLoginService],
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },

  {
    path: 'pages',
    canActivate: [AfterLoginService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  // {path: 'admin', canActivate: [AfterLoginService], redirectTo: '/pages/dashboard', pathMatch: 'full'},
  // {path: 'pages', canActivate: [BeforeLoginService], redirectTo: '/admin/login', pathMatch: 'full'},
  // {path: '**', canActivate: [BeforeLoginService], redirectTo: 'web'},

];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
