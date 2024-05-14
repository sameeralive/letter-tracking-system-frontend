import {Component, OnInit} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";
import {NbToastrService} from "@nebular/theme";
import {BranchService} from "../services/branch.service";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private tokenService: TokenService,
    private branchService: BranchService,
    private toastrService: NbToastrService,
  ) {
    this.getAuthUser();
  }

  ngOnInit(): void {
  }

  getAuthUser() {
    this.authService.getAuthUser().subscribe(response => {
      this.authService.authUser = response;
      this.authService.authUserPermissions = [];
      this.authService.authUser.user_role.permissions.forEach(el => {
        this.authService.authUserPermissions.push(el.permission.permission_name);
      })
      this.permissionsService.loadPermissions(this.authService.authUserPermissions);
      this.menu.forEach(x => {
        if (x.data && x.data.length > 0) {
          x.data.forEach(y => {
            if (this.authService.authUserPermissions.includes(y)) {
              x.hidden = false;
            }
          })
        }

      })
    }, error => {
      console.log(error);
      this.token.remove();
      this.authService.changeAuthStatus(false);
      this.router.navigateByUrl('/admin/login');
    });
  }



  handleError(error) {
    console.log(error.error.message);
    this.toastrService.danger('Something went wrong', 'Error!', {duration: 4000, destroyByClick: true});
  }


}
