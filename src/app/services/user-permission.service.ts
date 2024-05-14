import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {

  constructor(private http: HttpClient) {
  }

  permissionCreate(data) {
    if (data.id) {
      return this.http.post(root_url + 'permission-update', data);
    } else {
      return this.http.post(root_url + 'permission-create', data);
    }
  }

  getPermissionList(data) {
    return this.http.post(root_url + 'permission-list', data);
  }

  getPermissionData(id) {
    return this.http.get(root_url + 'permission-show/' + id);
  }

  getAllPermissions() {
    return this.http.get(root_url + 'permission-all');
  }

  deletePermission(id) {
    return this.http.get(root_url + 'permission-delete/' + id);
  }

}
