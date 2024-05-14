import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRole} from "../../../models/user-role.model";
import {UserPermissionService} from "../../../services/user-permission.service";
import {UserRoleService} from "../../../services/user-role.service";

@Component({
  selector: 'ngx-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {

  role: any;
  permissionList: any = [];
  loading: boolean = false;
  error: any = {};

  constructor(
    private userRoleService: UserRoleService,
    private userPermissionService: UserPermissionService,
    private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.role = new UserRole();
  }

  async ngOnInit(): Promise<any> {
    this.permissionList = await this.getUserPermissions();
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id) {
          this.getRoleData(params.id);
        }
      });
  }

  getUserPermissions() {
    return this.userPermissionService.getAllPermissions().toPromise().then(response => {
      return response;
    }, error => {
      this.handleError(error);
      return null;
    });
  }

  roleCreate() {
    this.setPermissions();
    this.loading = true;
    this.userRoleService.roleCreate(this.role).subscribe(response => {
      this.loading = false;
      this.toastrService.success('Successfully Saved!', `Success`, {duration: 4000, destroyByClick: true})
      this.router.navigateByUrl('/pages/user-roles/role-list')
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  setPermissions() {
    this.role.permissions = [];
    this.role.toBeDeletePermissions = [];
    for (let key in this.permissionList) {
      this.permissionList[key].forEach(data => {
        if (!data.role_id && data.checked && data.checked == true) {
          this.role.permissions.push({permission_id: data.id});
        }
        if (data.role_id && data.checked == false) {
          this.role.toBeDeletePermissions.push({permission_id: data.id});
        }
      })
    }
  }

  handleError(error) {
    this.error = error.error.errors;
    this.toastrService.danger(error.error.message, 'Error!', {duration: 4000, destroyByClick: true});
  }

  getRoleData(id: any) {
    this.loading = true;
    this.userRoleService.getRoleData(id).subscribe(response => {
      this.role = response;
      this.setExistRolePermissions();
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  setExistRolePermissions() {
    this.loading = true;
    for (let key in this.permissionList) {
      this.permissionList[key].forEach(data => {
        let role = this.role.permissions.find(e => e.permission_id === data.id);
        if (role) {
          data.checked = true;
          data.role_id = role.role_id;
        }
      })
    }
    this.loading = false;
  }

  checkAll() {
    for (let key in this.permissionList) {
      this.permissionList[key].forEach(data => {
          data.checked = true;
      })
    }
  }
}
