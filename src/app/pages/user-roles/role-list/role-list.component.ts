import { Component, OnInit } from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {Pagination} from "../../../models/common.model";
import {UserRoleSearch} from "../../../models/user-role.model";
import {UserRoleService} from "../../../services/user-role.service";

@Component({
  selector: 'ngx-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  loading: boolean = false;
  roles: any[] = [];
  pagination: Pagination;
  search: any = {};

  constructor(
    private toastrService: NbToastrService,
    private userRoleService: UserRoleService,
  ) {
    this.pagination = new Pagination();
    this.search = new UserRoleSearch();
  }

  ngOnInit(): void {
    this.getRoleList(1);
  }

  getRoleList(event) {
    this.loading = true;
    this.pagination.current_page = event;
    this.pagination.filter = this.search;
    this.userRoleService.getRoleList(this.pagination).subscribe((response: any) => {
      this.roles = response.data;
      this.pagination.total = response.total;
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  handleError(error) {
    console.log(error.error.message);
    this.toastrService.danger('Something went wrong', 'Error!', {duration: 4000, destroyByClick: true});
  }

  clear() {
    this.search = new UserRoleSearch();
    this.getRoleList(1);
  }
}
