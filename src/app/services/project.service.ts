import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjectList(data) {
    return this.http.post(root_url + 'project-list', data);
  }

  createProject(data: any) {
    if (data.id) {
      return this.http.post(root_url + 'project-update', data);
    } else {
      return this.http.post(root_url + 'project-create', data);
    }
  }

  getProjectData(id: any) {
    return this.http.get(root_url + 'project-view/' + id);
  }
}
