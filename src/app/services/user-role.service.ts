import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient) {
  }

  roleCreate(data) {
    if (data.id) {
      return this.http.post(root_url + 'role-update', data);
    } else {
      return this.http.post(root_url + 'role-create', data);
    }
  }

  getRoleList(data) {
    return this.http.post(root_url + 'role-list', data);
  }

  getRoleData(id) {
    return this.http.get(root_url + 'role-show/' + id);
  }

  getUserRoles() {
    return this.http.get(root_url + 'role-all');
  }

}
