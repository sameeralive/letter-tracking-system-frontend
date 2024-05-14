import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {NbToastrService} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {BranchService} from "../../../services/branch.service";
import {UserRoleService} from "../../../services/user-role.service";

@Component({
  selector: 'ngx-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {

  user: any;
  error: any = {};
  loading: boolean = false;
  allBranches: any = [];
  userRoles: any = [];

  constructor(
    private userService: UserService,
    private toastrService: NbToastrService,
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService,
    private userRoleService: UserRoleService,
    private router:Router,
  ) {
    this.user = new User();
    this.getUserRoles();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id) {
          this.getUserData(params.id);
        }
      });
  }

  getBranches(){
    this.loading = true;
    this.branchService.getBranches().subscribe(response => {
      this.loading = false;
      this.allBranches = response;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  getUserRoles(){
    this.loading = true;
    this.userRoleService.getUserRoles().subscribe(response => {
      this.loading = false;
      this.userRoles = response;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  userCreate() {
    this.loading = true;
    this.userService.userCreate(this.user).subscribe(response => {
      this.loading = false;
      this.toastrService.success('Successfully Saved!', `Success`, {duration: 4000, destroyByClick: true});
      this.router.navigateByUrl('/pages/users/user-list')
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

  handleError(error) {
    this.error = error.error.errors;
    this.toastrService.danger(error.error.message, 'Error!', {duration: 4000, destroyByClick: true});
  }

  getUserData(id: any) {
    this.loading = true;
    this.userService.getUserData(id).subscribe(response => {
      this.user = response;
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }
}
