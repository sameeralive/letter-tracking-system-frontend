import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  userCreate(data) {
    if (data.id) {
      return this.http.post(root_url + 'user-update', data);
    } else {
      return this.http.post(root_url + 'user-create', data);
    }
  }

  getUserList(data) {
    return this.http.post(root_url + 'user-list', data);
  }

  getUserData(id) {
    return this.http.get(root_url + 'user-view/' + id);
  }

  getDoctors(data) {
    return this.http.post(root_url + 'user-available-doctors', data);
  }

  deleteUser(id) {
    return this.http.get(root_url + 'user-delete/' + id);
  }

}
