import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {NbToastrService} from '@nebular/theme';
import {SearchUser, User} from '../../../models/user.model';
import {Pagination} from "../../../models/common.model";
import {BranchService} from "../../../services/branch.service";
import {AuthService} from "../../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  search: SearchUser;
  loading: boolean = false;
  error: any;
  pagination: Pagination;

  constructor(
    private userService: UserService,
    private toastrService: NbToastrService,
    public authService: AuthService,
    private branchService: BranchService,
  ) {
    this.search = new SearchUser();
    this.pagination = new Pagination();
  }

  ngOnInit(): void {
    this.getUserList(1);
  }

  getUserList(event) {
    this.loading = true;
    this.pagination.current_page = event;
    this.pagination.filter = this.search;
    this.userService.getUserList(this.pagination).subscribe((response: any) => {
      this.users = response.data;
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
    this.search = new SearchUser();
    this.getUserList(1);
  }

  deleteUser(data) {
    Swal.fire({
      title: 'Are you sure want to delete user?',
      showCancelButton: true,
      confirmButtonText: `Yes, delete!`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmDeleteUser(data.id);
      }
    })
  }

  confirmDeleteUser(id) {
    this.loading = true;
    this.userService.deleteUser(id).subscribe(response => {
      this.getUserList(1)
      this.loading = false;
    }, error => {
      this.handleError(error);
      this.loading = false;
    });
  }

}
