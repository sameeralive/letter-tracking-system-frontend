import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BranchService {

  public branchList: any = [];

  constructor(private http: HttpClient) { }

  branchCreate(data) {
    if (data.id) {
      return this.http.post(root_url + 'branch-update', data);
    } else {
      return this.http.post(root_url + 'branch-create', data);
    }
  }

  getBranchList(data) {
    return this.http.post(root_url + 'branch-list', data);
  }

  getBranchData(id) {
    return this.http.get(root_url + 'branch-show/' + id);
  }

  getBranches() {
    return this.http.get(root_url + 'branch-all');
  }

  getBranchesWeb() {
    return this.http.get(root_url + 'web-branch-all');
  }

  disableBranch(id) {
    return this.http.get(root_url + 'disable-branch/' + id);
  }

}
