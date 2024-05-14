/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-app',
  template: `
    <ng-snotify></ng-snotify>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
  ) {
  }

  ngOnInit(): void {
    // this.authService.getAuthUser().subscribe(response => {
    //   this.authService.authUser = response;
    //   this.authService.authUserPermissions = [];
    //   this.authService.authUser.user_role.permissions.forEach(el => {
    //     this.authService.authUserPermissions.push(el.permission.permission_name);
    //   })
    //   this.permissionsService.loadPermissions(this.authService.authUserPermissions);
    // }, error => {
    //   console.log(error);
    //   this.token.remove();
    //   this.authService.changeAuthStatus(false);
    // });
  }
}
