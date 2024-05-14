import { Component, OnInit } from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleList} from "../../../common/arrays";
import {UserPermissionService} from "../../../services/user-permission.service";
import {UserPermission} from "../../../models/user-permission.model";

@Component({
  selector: 'ngx-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.scss']
})
export class PermissionCreateComponent implements OnInit {

  permission: any;
  loading: boolean = false;
  error: any = {};
  moduleList = ModuleList;

  constructor(
    private userPermissionService: UserPermissionService,
    private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.permission = new UserPermission();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id) {
          this.getPermissionData(params.id);
        }
      });
  }

  permissionCreate() {
    this.loading = true;
    this.userPermissionService.permissionCreate(this.permission).subscribe(response => {
      this.loading = false;
      this.toastrService.success('Successfully Saved!', `Success`, {duration: 4000, destroyByClick: true})
      this.router.navigateByUrl('/pages/user-permissions/permission-list')
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  handleError(error) {
    this.error = error.error.errors;
    this.toastrService.danger(error.error.message, 'Error!', {duration: 4000, destroyByClick: true});
  }

  getPermissionData(id: any) {
    this.loading = true;
    this.userPermissionService.getPermissionData(id).subscribe(response => {
      this.permission = response;
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

}
