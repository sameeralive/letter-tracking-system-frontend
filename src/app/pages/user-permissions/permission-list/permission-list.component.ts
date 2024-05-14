import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {UserPermissionService} from "../../../services/user-permission.service";
import {SearchPermissions} from "../../../models/user-permission.model";
import {Pagination} from "../../../models/common.model";
import Swal from "sweetalert2";

@Component({
  selector: 'ngx-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {

  loading: boolean = false;
  permissions: any[] = [];
  pagination: Pagination;
  search: SearchPermissions;

  constructor(
    private toastrService: NbToastrService,
    private userPermissionService: UserPermissionService,
  ) {
    this.pagination = new Pagination();
    this.search = new SearchPermissions();
  }

  ngOnInit(): void {
    this.getPermissionList(1);
  }

  getPermissionList(event) {
    this.loading = true;
    this.pagination.current_page = event;
    this.pagination.filter = this.search;
    this.userPermissionService.getPermissionList(this.pagination).subscribe((response: any) => {
      this.permissions = response.data;
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

  resetFilters() {
    this.search = new SearchPermissions();
    this.getPermissionList(1);
  }

  deletePermission(permission) {
    Swal.fire({
      title: 'Are you sure want to delete ' + permission.permission_name + '?',
      showCancelButton: true,
      confirmButtonText: `Yes, delete!`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmDelete(permission.id);
      }
    })
  }

  confirmDelete(id){
    this.loading = true;
    this.userPermissionService.deletePermission(id).subscribe(response => {
      this.getPermissionList(1)
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

}
